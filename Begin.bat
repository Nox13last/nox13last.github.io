echo Are we (1)publishing or (2)just creating?
set /p "publish=>"

if %publish%==Y goto upload
if %publish%==y goto nah

:upload
start http://localhost:3000
node server.js
exit

:nah
start http://localhost:3000
node server-no-push.js
exit
