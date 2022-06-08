
const express = require('express');
const hostname = '127.0.0.1';
const port = 3008;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'dbFalconi.db';
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("../frontend"));
app.use(express.json())

/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos registros (é o R do CRUD - Read)
// Gabriela 
app.get('/Agenda', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Agenda ORDER BY Agenda COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/agendaInsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Agenda (idAgenda, Agenda) VALUES ('" + req.body.idAgenda + "', '" + req.body.Agenda + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/agendaUpdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE Agenda SET Agenda = '" + req.body.Agenda + "' WHERE idAgenda =" + req.body.idAgenda;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/agendaDelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM Agenda WHERE idAgenda =" + req.body.idAgenda;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});


//CRUD - Eixos
// Sophia
app.get('/Eixo', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Eixo ORDER BY Eixo COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//Insere um registro (é o C do CRUD - Create)
app.post('/eixoInsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Eixo (idEixo, idAgenda, Eixo) VALUES ('" + req.body.idEixo + "', '" + req.body.idAgenda + "' , 'Adição Teste')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/eixoUpdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE Eixo SET Eixo = '" + req.body.Eixo + "' WHERE idEixo = " + req.body.idEixo;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/eixoDelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM Eixo WHERE idEixo =" + req.body.idEixo;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

// CRUD - Escola 
// Henrique
app.get('/Escola', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Escola ORDER BY idEscola COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//Insere um registro (é o C do CRUD - Create)
app.post('/escolaInsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Escola (idCidade, idEscola, Modalidade, NumProf, NumAlun, NumFunc, Nome) VALUES ('" + req.body.idCidade + "', '" + req.body.idEscola + "' ,'" + req.body.Modalidade + "', '" + req.body.NumProf + "', '" + req.body.NumAlun + "', '" + req.body.NumFunc + "', '" + req.body.Nome + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// CRUD - Pergunta 
//Mateus
app.get('/Pergunta', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Pergunta ORDER BY idPergunta COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//Insere um registro (é o C do CRUD - Create)
app.post('/perguntaInsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Pergunta (idPergunta, Pergunta, idTema) VALUES ('" + req.body.idPergunta + "', '" + req.body.Pergunta + "' ,'" + req.body.idTema + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// CRUD - Tema 
//Patricia
app.get('/Tema', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Tema ORDER BY idTema COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//Insere um registro (é o C do CRUD - Create)
app.post('/temaInsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Tema (idTema, idEixo, idAgenda, Tema) VALUES ('" + req.body.idTema + "', '" + req.body.idEixo + "' ,'" + req.body.idAgenda + "','" + req.body.Tema + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// CRUD - Resposta 
// Daniel
app.get('/Resposta', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Resposta ORDER BY idResposta COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//Insere um registro (é o C do CRUD - Create)
app.post('/respostaInsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Resposta (idResposta, idPergunta, idEscola, Completed, idOpcao) VALUES ('" + req.body.idResposta + "', '" + req.body.idPergunta + "' ,'" + req.body.idEscola + "','" + req.body.Completed + "','" + req.body.idOpcao + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

//Gabriela
app.get('/Cidade', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT Cidade FROM Cidade  WHERE idEstado = 2 ';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Patricia
app.get('/Opcao', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Opcao ORDER BY idOpcao COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/`);
});