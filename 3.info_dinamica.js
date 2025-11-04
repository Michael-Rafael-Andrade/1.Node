const http = require('node:http');

const hostname = '127.0.0.1';
const porta = 3000;
let contagem_visitas = 0;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    contagem_visitas++

    var resposta = 
    `<html>
        <head>
            <meta charset="utf-8">
            <title>Olá Mundo HTML</title>
        </head>
        <body>
            <h3>Olá Mundo HTML com contador de visitas</h3>
            <p>Este site já foi visitado: ` + contagem_visitas + ` vez(es)</p>
        </body>
    </html>`

    // envia resposta e finaliza conexão
    res.end(resposta);
});

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando no endreço http://${hostname}:${porta}/`);
});