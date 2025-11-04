const http = require('node:http');

const hostname = '127.0.0.1';
const porta = 3000;
let contagem_visitas = 0;
const data_atual = new Date(Date.now());

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    contagem_visitas++;

// comentario: obter data atual
    // const data_atual = new Date(Date.now());
// retorna string com data formatada para o formato brasileiro    
    const data_formatada = data_atual.toLocaleDateString();
    var resposta = 
    `<html>
        <head>
            <meta charset="utf-8">
            <title>Olá Mundo HTML</title>
        </head>
        <body>
            <h3>Olá, este é um com contador de visitas</h3>
            <p>Este site já foi visitado: ` + contagem_visitas + ` vez(es)</p>
            <p>Esta é uma aplicação que informa o dia e a hora atual! </p>
       
            <!-- retorna string com data formatada para o formato brasileiro -->
            Dia e Hora = ` + data_formatada + `
        </body>
    </html>`

    // envia resposta e finaliza a conexão
    res.end(resposta);
});

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando no endereço: http://${hostname}:${porta}/`);
});