# CIS550
NBA-1.5 is the current version of our application, you can use git clone command in the terminal to download this project, change director to NBA-1.5, enter "node app" command in you terminal, and go to http://localhost:8080/ to use our application.

The view folder contains .jade files which can represent the output of search result from routes.

player.jade, team.jade and playerMonthlyStats.jade present views for the homepage, and the rest files present views for different queries.

The routes folder contains .js files which can receive the user input, and convert it to parameters in queries to run the queries and show corresponding information to users.

Here are some important links to our application and databases:

The link for our application on heroku: http://nba-facts.herokuapp.com/ 

The link for our GitHub: https://github.com/hallelujar/CIS550

The instruction to connect to our SQL database:
username - instructor
password - instructor
host - finalprojectcis550.c6wetbpb49dv.us-west-2.rds.amazonaws.com
port - 3306
database name = nbaSQL
instructor@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=finalprojectcis550.c6wetbpb49dv.us-west-2.rds.amazonaws.com)(PORT=3306))(CONNECT_DATA=(SID=nbaSQL)))


The instruction to connect to our NoSQL database (MongoDB):
$ mongo ds121171.mlab.com:21171/cis550 -u owner -p clintonyangyixuan


The link for NBA api: https://github.com/bttmly/nba 
