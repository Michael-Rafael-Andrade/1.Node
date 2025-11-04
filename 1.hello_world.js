// importa o módulo HTTP para processar requisição HTTP
const http = require('node:http');

// especifica IP e PORTA para serem utilizadas
const hostname = '127.0.0.1';
const porta = 3000;

// cria o servidor http
const server = http.createServer((req, res) => {
    //prepara o cabeçalho da rsposta
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // "escreve" ou envia dados
    res.write("Olá Mundo!\n");

    // finaliza a conexão
    res.end();
});

// configura o endereço e porta do servidor e ativa o servidor
server.listen(porta, hostname, () => {
    // exibe uma mensagem informando que o servidor está pronto
    console.log(`Servidor rodando no endreço http://${hostname}:${porta}/`);
})