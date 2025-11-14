@echo off
echo Setting up GitHub Pages deployment for Cheshire Homes Management System
echo.
echo IMPORTANT: Before running this script, you need to:
echo 1. Create a GitHub repository named "Cheshire"
echo 2. Update the homepage URL in client/package.json with your GitHub username
echo 3. Have your GitHub username and repository URL ready
echo.
pause
echo.

REM Get user input
set /p GITHUB_USERNAME="Enter your GitHub username: "
set /p REPO_NAME="Enter your repository name (default: Cheshire): "
if "%REPO_NAME%"=="" set REPO_NAME=Cheshire

echo.
echo Updating package.json with your GitHub username...

REM Update package.json homepage
powershell -Command "(Get-Content client\package.json) -replace 'yourusername', '%GITHUB_USERNAME%' | Set-Content client\package.json"

echo Homepage updated to: https://%GITHUB_USERNAME%.github.io/%REPO_NAME%
echo.

REM Add remote origin
echo Adding GitHub repository as remote origin...
git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git

echo.
echo Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo Building and deploying to GitHub Pages...
cd client
npm run deploy
cd ..

echo.
echo ================================
echo Deployment Complete!
echo ================================
echo Your site should be available at:
echo https://%GITHUB_USERNAME%.github.io/%REPO_NAME%
echo.
echo Note: It may take a few minutes for GitHub Pages to update.
echo Check your repository Settings > Pages to confirm the deployment.
pause