@echo off
echo ========================================
echo   Tech Support Website - Development
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo [1/2] Installing dependencies...
    echo.
    call npm install
    echo.
    echo Dependencies installed successfully!
    echo.
) else (
    echo Dependencies already installed.
    echo.
)

echo [2/2] Starting development server...
echo.
echo Opening http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

call npm run dev
