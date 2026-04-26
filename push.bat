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
git commit -m "Update LOVECHEAT - Add new guides"

REM Push (Force)
echo Pushing to GitHub...
git push -f origin main

echo.
echo ========================================
echo Push completed!
echo Check: https://github.com/Pongsakorn132/lovecheat
echo Vercel will auto-deploy in 1-2 minutes
echo ========================================
pause
