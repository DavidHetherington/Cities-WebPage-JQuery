Part of the MinimalSaaS architecture. The Cities WebPage is a 
front end that uses JQuery to persist and format data. The main code
is built into index.html.   

The code builds a table of cities with population, cost
of living, and crime rate which it gets from the
RESTful API provided by CitiesBE.js which is hosted
somewhere else, for example on an Amazon EC2 instance.
CitiesBE.js in turn accesses the Cities Collection in the 
asatte-press-city-guide database on Mongolab.com.


David Hetherington - 17 December 2015