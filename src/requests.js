/**
 * Module Dependencies
 */
const config  = require('./config'),
      restify = require('restify'),
      mysql      = require('mysql');


const fs = require('fs');

/**w
 * Initialize Server
 */
const server = restify.createServer({
    name    : config.name,
    version : config.version,
    url : config.hostname
});



var connection = config.db.get;
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(
	function crossOrigin(req,res,next){
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		return next();
	}
);

/*server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});*/

//rest api to get all results
server.get('/estados', function (req, res) {
   connection.query('select * from ESTADOS', function (error, results, fields) {
	  if (error) console.log('err');
	  res.end(JSON.stringify(results));
	});
});

//rest api to get a single employee data
server.get('/estados/:id', function (req, res) {
   connection.query('select * from ESTADOS where clave_estado=?', [req.params.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});


//rest api to get all results
server.get('/alumnos', function (req, res) {
	connection.query('select * from ALUMNOS', function (error, results, fields) {
		if (error) console.log('err');
		res.end(JSON.stringify(results));
	});
});

//rest api to get a single employee data
server.get('/alumnos/:id', function (req, res) {
	connection.query('select * from ALUMNOS where numero_control=?', [req.params.id], function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});


//rest api to get all results
server.get('/becas', function (req, res) {
	connection.query('select * from BECAS', function (error, results, fields) {
		if (error) console.log('err');
		res.end(JSON.stringify(results));
	});
});

//rest api to get a single employee data
server.get('/becas/:id', function (req, res) {
	connection.query('select * from BECAS where clave_beca=?', [req.params.id], function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});



//rest api to get all results
server.get('/tiposBecas', function (req, res) {
	connection.query('select * from TIPOS_BECAS', function (error, results, fields) {
		if (error) console.log('err');
		res.end(JSON.stringify(results));
	});
});

//rest api to get a single employee data
server.get('/tiposBecas/:id', function (req, res) {
	connection.query('select * from TIPOS_BECAS where clave_beca=?', [req.params.id], function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});


//rest api to get all results
server.get('/instituciones', function (req, res) {
	connection.query('select * from INSTITUCIONES', function (error, results, fields) {
		if (error) console.log('err');
		res.end(JSON.stringify(results));
	});
});

//rest api to get a single employee data
server.get('/instituciones/:id', function (req, res) {
	connection.query('select * from INSTITUCIONES where clave_institucion=?', [req.params.id], function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});


// //rest api to create a new record into mysql database
// server.post('/employees', function (req, res) {
//    var postData  = req.body;
//    console.log(JSON.stringify(postData))
// 	// connection.query('INSERT INTO employee SET ?', postData, function (error, results, fields) {
// 	//   if (error) throw error;
// 	//   res.end(JSON.stringify(results));
// 	// });
// });

//rest api to update record into mysql database
server.put('/employees', function (req, res) {
   connection.query('UPDATE `employee` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name,req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

// //rest api to delete record from mysql database
// server.delete('/employees/:id', function (req, res) {
//    connection.query('DELETE FROM `employee` WHERE `id`=?', [req.params.id], function (error, results, fields) {
//     if (error) throw error;
//     res.end('Record has been deleted!');
//   });
// });

server.get('/', function(req, res){

    console.log('Hello from REST API');
});

server.listen(process.env.PORT || 3001, function () {
  console.log('%s listening at %s', server.name, server.url);
});