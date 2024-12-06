const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const multer = require('multer'); // For handling file uploads

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Configure Multer for image uploads
const uploadFolder = path.join(__dirname, '_uploads');
if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder);
}
const upload = multer({ dest: uploadFolder });

// Handle form submission
app.post('/submit', upload.single('image'), (req, res) => {
    const { title, layout, categories, comments, message, altText } = req.body;
    const image = req.file;

    // Get the current date and time
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    // Join multiple selected categories into a comma-separated string
    const categoryList = Array.isArray(categories) ? categories.join(', ') : categories;

    // Generate image reference if an image is uploaded
    let imageReference = '';
    if (image) {
        const imageExtension = path.extname(image.originalname);
        const newImageName = `${Date.now()}${imageExtension}`;
        const imagePath = path.join(uploadFolder, newImageName);

        // Rename and move the uploaded file
        fs.renameSync(image.path, imagePath);

        // Add image reference
imageReference = `<center><a href="https://raw.githubusercontent.com/Nox13last/nox13last.github.io/refs/heads/main/_uploads/${newImageName}"><img src="https://raw.githubusercontent.com/Nox13last/nox13last.github.io/refs/heads/main/_uploads/${newImageName}" width="600"></a></center>\n`;
    }

    // Format the content for the text file
    const content = `---
title: "${title}"
layout: ${layout}
date: ${formattedDate}
categories: ${categoryList}
comments: ${comments}
---
${message}

${imageReference}
`;

    // Sanitize the title to create a safe filename
    const sanitizedTitle = title.replace(/[^a-zA-Z0-9_-]/g, '_');
    const filename = `./_posts/${year}-${month}-${day}-${sanitizedTitle}.markdown`;

    // Write content to the dynamically named file
const { exec } = require('child_process');

fs.writeFile(path.join(__dirname, filename), content, (err) => {
    if (err) {
        console.error('Error writing to file', err);
        return res.status(500).send('Internal Server Error');
    }

    res.send(`File "${filename}" generated successfully!`);

    // Wait for 3 seconds before running Git commands
setTimeout(() => {
    const command = `cd ${__dirname} && git add . && git commit -m "Posted via form: ${filename}"`;

    exec(command, (error, stdout, stderr) => {
        console.log("Command executed: ", command); // Log the exact command being run

        if (error) {
            console.error('Error executing command:', error.message);
            console.error('Error details:', error);
            return;
        }

        console.log('Standard output:', stdout);
        if (stderr) {
            console.error('Standard error:', stderr);
        }
    });
}, 3000);

});
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});