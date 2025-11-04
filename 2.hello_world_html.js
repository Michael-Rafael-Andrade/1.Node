// importa o módulo http para processar requisição http
const http = require('node:http');

// especifica IP e PORTA a serem utilizadas
const hostname = '127.0.0.1';
const porta = 3000;

// cria o servidor HTTP
const server = http.createServer((req, res) => {
    // prepara o cabeçalho da resposta
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');

    var resposta =
        `<html>
            <head>
                <meta charset="utf-8">
                <title>Olá Mundo HTML</title>
            </head>
            <body>
                <p>Olá Mundo HTML</p>
            </body>
        </html>            
        `
    // "escreve" ou envia a resposta
    res.write(resposta);

    // finaliza a conexão
    res.end();
});

// configura o endreço e porta do servidor e ativa o servidor
server.listen(porta, hostname, () => {
     // exibe uma mensagem informando que o servidor está pronto
     console.log(`Servidor rodando no endereço http://${hostname}:${porta}/`);
});