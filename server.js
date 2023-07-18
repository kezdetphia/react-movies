const express = require('express');      //requiring express framework
const path = require('path');            //this is part of node, will allow me to specifiy the build folder path
const favicon = require('serve-favicon');  
const logger = require('morgan');  //logger middleware logs information about incoming http requests and outgoning responses
 
const app = express();  
     
require('dotenv').config();
 
app.use(logger('dev'));  //mounts logger middleware, 
app.use(express.json());
 // Configure to use port 3001 instead of 3000 during
 // development to avoid collision with React's dev server
 const port = process.env.PORT || 3001;
	
 app.listen(port, function() {
   console.log(`Express app running on port ${port}`)
 });

app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
