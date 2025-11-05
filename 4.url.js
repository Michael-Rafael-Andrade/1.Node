const http = require('node:http');

const hostname = '127.0.0.1';
const porta = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') // requisição página principal
        paginaPrincipal(req, res)
    else if (req.url === '/sobre') // requisicao página "Sobre"
        paginaSobre(req, res)
    else {
        // código 404 indica erro (recurso não localizado)
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        // chama a função que finaliza a conexão, enviando a resposta
        res.end("Não foi possível acessar o caminho: " + req.url);
    }
});

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando no endereço http://${hostname}:${porta}/`);
});

function paginaPrincipal(req, res) {
    // Prepara o cabeçalho da resposta
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // Chama a função que finaliza a conexão, enviando a resposta
    res.end(
        `<html>
            <head>
                <meta charset="utf-8" />
                <title>Página Principal</title>
            </head>
            <body>
                <h1>Exemplo Node.js com mais de uma página.</h1>
                <p><a href='/sobre'>Sobre esta página</a></p>
            </body>
        </html>`
    );
}

function paginaSobre(req, res) {
    // prepara o cabeçalho da resposta
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // chama a função que finaliza a conexão, enviando a resposta
    res.end(
        `<html>
            <head>
                <meta charset="utf-8" />
                <title>Página Sobre</title>
            </head>
            <body>
                <h1>Informações sobre a página</h1>
                <p><a href='/sobre'>Sobre esta página</a></p>
            </body>
        </html>`
    );
}

