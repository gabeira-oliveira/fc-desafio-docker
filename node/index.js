const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')
const dbConnection = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'db',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'nodedbdesafio',
});

dbConnection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar MySQL: ', err);
    } else {
        console.log('Conexão bem sucedida! MySQL');

        app.listen(3000, () => {
            console.log('rodando!');
        });
    }
});

app.get('/insert', (req, res) => {
    const sql = `INSERT INTO clubes(nome,pontuacao) values('Grêmio',100)`
    dbConnection
        .query(sql)

    res.send('mais um clube inserido')
})



app.get('/', (req, res) => {
    dbConnection.query('SELECT * FROM clubes',
        function (err, rows) {
            debugger
            if (err) throw err;

            var texto = '';
            for (var i = 0; i < rows.length; i++) {
                texto += '<p> Linha ' + i
                texto += ' id = ' + rows[i].id
                texto += ' nome = ' + rows[i].nome
                texto += ' pontuacao = ' + rows[i].pontuacao
                texto += ' </p> '
            }
            res.send(texto)
        });
})
