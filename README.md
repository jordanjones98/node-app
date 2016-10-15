# node-app
Node app, building stuff as I go along. First Node venture looking to replace code as I go along to make it look cleaner.

## Whats the purpose?
The purpose of building this app is to learn how Node.js works along side with MySQL and Nginx. I also hope to show this project to potential employers in the future. 

## What you need
This app is built with node.js and nginx, to run a test version on your computer you will need to download Node.js. You can use the node.js installer to download node that can be found <a href="https://nodejs.org/en/download/">here</a>. This will download node into your terminal. You will also need to clone this app by typing this command into the terminal

### Setting up enviroment, run these commands
<code>npm install express</code><br>
<code>npm install mysql</code><br>
<code>npm install express-handlebars</code><br>
<code>npm install lodash</code><br>
<code>npm install express-session</code><br>
<code>npm install connect-redis</code><br>
<code>sudo node index.js</code> (To start server)

### Nodemon
If you just use <code>sudo node index.js</code> you have to restart the server evrey time you make a change. I suggsest installing <a href="http://nodemon.io/">nodemon</a>. With every file change node.js will automaticly restart. You can also manually restart by typing <code>rs</code> and pressing enter. To download this run the command <code>npm install -g nodemon</code> and to start node.js run <code>sudo nodemon index.js</code>.

## Making Changes.
When you first login please identify yourself to make things easier by typing this into the command line <code>git config --global user.name "Your name"</code>.I ask that when you want to make changes you create another branch to test those changes in. Create a new branch using <code>git checkout -b [branch name]</code>. When you create a new branch, you can test all of your changes on your local machine (will be mentioned below) until finished. When you are done make sure you submit a pull request to the main branch. For more information on pull requests please see <a href="https://help.github.com/articles/about-pull-requests/">Pull Requests by Github</a>, and for information on how to create a pull request please see <a href="https://help.github.com/articles/creating-a-pull-request/">Creating pull requests by github</a>. The last thing to do after a pull request has been accepted is to remove the branch using <code>git branch -d [branch name]</code>. One great git resource can be found <a href="https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html">here</a> if you need any help. 

## Testing changes locally
Before you submit a pull request we ask that you test your changes locally. To do this open your terminal and cd into the directory that contains the app. Once you are in the ROOT directory of the app you can use <code>sudo node index.js</code> to start the app. From there it should be available on localhost in your broswer. For refrence the app runs on port 80 so no need to specify the port. 

## FAQ
If you have any questions feel free to send me an email at 
<a href="mailto:jordanalanjones@gmail.com">jordanalanjones@gmail.com</a> 
Last update 10/14/2016
