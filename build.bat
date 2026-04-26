@echo off
echo ========================================
echo   Tech Support Website - Build
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo [1/2] Installing dependencies...
    echo.
    call npm install
    echo.
)

echo Building for production...
echo.
call npm run build

echo.
echo ========================================
echo Build completed!
echo.
echo To start production server, run:
echo   npm start
echo ========================================
pause
