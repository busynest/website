...create a new repository on the command line
echo "# chessDefense" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/busynest/project.git
git push -u origin master

…or push an existing repository from the command line
git remote add origin https://github.com/busynest/project.git
git push -u origin master