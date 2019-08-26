var mongoose = require('mongoose');
var chalk = require('chalk');
var dbURL = require('./properties').DB;

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination= chalk.bold.magenta;

//export this function and import by server.js
module.exports= function(){
    mongoose.connect(dbURL);
    mongoose.connection.on('connected', function(){
        console.log(connected("Mongoose default connection is open to", dbURL));
    });
    mongoose.connection.on('error', function(err){
        console.log(error("mongoose default connection is disconnected"));
    });
    mongoose.connection.on('disconnected', function(){
        console.log(disconnected("Mongoose default connection is desconnected"));
    });
    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log(termination("Mongoose defaul connection is disconnected due to application termination"));
            process.exit(0)
        })
    })
}