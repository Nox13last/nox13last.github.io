@ECHO OFF
echo Commit Message:
set /p "commitmsg=>"
cd /d F:\Media\Github Pages\nox13last.github.io
git add . && git commit -m "%commitmsg%" && git push
echo Done?
pause