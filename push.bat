@echo off
echo ========================================
echo   Pushing to GitHub
echo ========================================
echo.

REM Configure Git
git config --global user.email "plammapro@gmail.com"
git config --global user.name "Pongsakorn132"

REM Add all files
echo Adding files...
git add .

REM Commit
echo Committing...
git commit -m "Add Chrome download fix guide"

REM Push
echo Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo Push completed!
echo Check: https://github.com/Pongsakorn132/lovecheat
echo ========================================
pause
