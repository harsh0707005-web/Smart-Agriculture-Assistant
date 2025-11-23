@echo off
echo Killing process on port 5001...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5001') do taskkill /F /PID %%a
echo Done!
pause
