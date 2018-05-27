'use strict'

var mysql = require('mysql');

module.exports = {
    name: 'rest-api',
    hostname : 'http://localhost',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    db: {
        get : mysql.createConnection({
			host     : 'controldebecas.ca1gntsnc3pu.us-west-2.rds.amazonaws.com',
			user     : 'alexrv99',
			password : 'aarv4299',
			database : 'ControlDeBecas'
		})
    }
};