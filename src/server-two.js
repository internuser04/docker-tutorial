// let express = require('express');
// let path = require('path');
// let fs = require('fs');
// let MongoClient  = require('mongodb').MongoClient ;
// let bodyParser = require('bodyParser');

// let app  = express();

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

// app.get('/', function (req,res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// })

// app.get('/foto-de-bu', async function(req,res) {
//     let img =  await fetch("https://imgs.search.brave.com/bR0ZXMJiEkM1P4eS5Mq0UO0WdpHoOERX9pSkiKhpoqo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDQvYm9vLWluLW1v/bnN0ZXItcy1pbmMu/anBn");
//     res.writeHead(200, { "Content-Type": 'image/jpg' });
//     res.end(img, 'binary');
// });

// // si usas conexion local
// let mongoUrlLocal = "mongodb://mongodb:biggiesmalls@localhost:27017";
// // si usas conexion con docker
// let mongoUrlDocker = "mongodb://mongodb:biggiesmalls@mongodb";

// let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// // "user-account" en docker, 'my-db' en docker-compose
// let databaseName = "my-db";

// app.post('/update-profile', function (req,res) {
//     let userObj = req.body;

//     MongoClient.connect(mongoUrlLocal, mongoClientOptions, function(err, client) {
//         if (err) throw err;
//         let db = client.db(databaseName);
//         userObj['userid'] = 1;
//         let myquery = { userid: 1 };
//         let newvalues = { $set: userObj };
//         db.collection('users').updateOne(myquery, newvalues, {upsert: true}, function(err,res) {
//             if (err) throw err;
//             client.close();
//         });
//     });

//     res.send(userObj);
// });

// app.get('/get-profile', function (req, res) {
//     let response = {};

//     MongoClient.connect(mongoUrlLocal, mongoClientOptions, function(err, client) {
//         if (err) throw err;
//         let db = client.db(databaseName);
//         let myquery = { userid: 1 };
//         db.collection('users').findOne(myquery, function(err,result) {
//             if (err) throw err;
//             response = result;
//             client.close();
//             res.send(response ? response : {});
//         });
//     });
// });

// app.listen(3000, function () {
//     console.log('escutando no porto 3000');
// })