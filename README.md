#Yaska Website
Will serve as framework to rapidly deploy clean & simple CMSes that are 100% couch. 

##Deploy:
Uses the kanso couchapp/package manager. 

To install kanso:

sudo npm install -g kanso

to run the app:

kanso install 
kanso push dbName

##crisis log/things that may happen again:

- delete & class are reserved in ie8, changed exports.delete with exports['delete'] in users.js
- isArray shiv for ie