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




server.get('/estados', function (req, res) {
   connection.query('select * from ESTADOS', function (error, results, fields) {
	  if (error) console.log('err');
	  res.end(JSON.stringify(results));
	});
});

server.get('/estados/columns', function (req, res) {
	connection.query('SHOW COLUMNS FROM ESTADOS', function (error, results, fields) {
		if (error) console.log('err');
		res.end(JSON.stringify(results));
	});
});

server.get('/estados/:id', function (req, res) {
   connection.query('select * from ESTADOS where clave_estado=?', [req.params.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});


server.post('/estados', function (req, res) {
	const postData = req.body;
	console.log(JSON.stringify(postData));
	connection.query('INSERT INTO ESTADOS SET ?', postData, function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});






server.get('/alumnos', function (req, res) {
	connection.query('select * from ALUMNOS', function (error, results, fields) {
		if (error) console.log('err');
		res.end(JSON.stringify(results));
		res.end(JSON.stringify(fields));
	});
});

server.get('/alumnos/columns', function (req, res) {
	connection.query('SHOW COLUMNS FROM ALUMNOS', function (error, results, fields) {
		if (error) console.log('err');
		res.end(JSON.stringify(results));
	});
});

server.get('/alumnos/:id', function (req, res) {
	connection.query('select * from ALUMNOS where numero_control=?', [req.params.id], function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});


server.post('/alumnos', function (req, res) {
	const postData = req.body;
	console.log(JSON.stringify(postData));
	connection.query('INSERT INTO ALUMNOS SET ?', postData, function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});







server.get('/becarios', function (req, res) {
	connection.query('select * from BECARIOS', function (error, results, fields) {
		if (error) console.log('err');
		res.end(JSON.stringify(results));
	});
});

server.get('/becarios/columns', function (req, res) {
	connection.query('SHOW COLUMNS FROM BECARIOS', function (error, results, fields) {
		if (error) console.log('err');
		res.end(JSON.stringify(results));
	});
});

server.get('/becarios/:id', function (req, res) {
	connection.query('select * from BECARIOS where clave_beca=?', [req.params.id], function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});


server.post('/becarios', function (req, res) {
	const postData = req.body;
	console.log(JSON.stringify(postData));
	connection.query('INSERT INTO BECARIOS SET ?', postData, function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});








server.get('/becas', function (req, res) {
	connection.query('select * from BECAS', function (error, results, fields) {
		if (error) console.log('err');
		res.end(JSON.stringify(results));
	});
});

server.get('/becas/columns', function (req, res) {
	connection.query('SHOW COLUMNS FROM BECAS', function (error, results) {
		if (error) console.log('err');
		res.end(JSON.stringify(results));
	});
});


server.get('/becas/:id', function (req, res) {
	connection.query('select * from BECAS where CLAVE_BECA=?', [req.params.id], function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});


server.post('/becas', function (req, res) {
	const postData = req.body;
	console.log(JSON.stringify(postData));
	connection.query('INSERT INTO BECAS SET ?', postData, function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});






server.get('/instituciones', function (req, res) {
	connection.query('select * from INSTITUCIONES', function (error, results, fields) {
		if (error) console.log('err');
		res.end(JSON.stringify(results));
	});
});


server.get('/instituciones/columns', function (req, res) {
	connection.query('SHOW COLUMNS FROM INSTITUCIONES', function (error, results, fields) {
		if (error) console.log('err');
		res.end(JSON.stringify(results));
	});
});


server.get('/instituciones/:id', function (req, res) {
	connection.query('select * from INSTITUCIONES where clave_institucion=?', [req.params.id], function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});


server.post('/instituciones', function (req, res) {
	const postData = req.body;
	console.log(JSON.stringify(postData));
	connection.query('INSERT INTO INSTITUCIONES SET ?', postData, function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});



//rest api to update record into mysql database
// server.put('/alumnos', function (req, res) {
// 	const postData = req.body;
//    connection.query('UPDATE ALUMNOS SET `NOMBRES`=?`APELLIDO_MATERNO`=? WHERE `NUMERO_CONTROL`=?', postData, function (error, results, fields) {
// 	  if (error) throw error;
// 	  res.end(JSON.stringify(results));
// 	});
// });

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