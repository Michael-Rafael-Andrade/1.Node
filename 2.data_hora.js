const http = require('node:http');

const hostname = '127.0.0.1';
const porta = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') // Requisição página principal
        paginaPrincipal(req, res);
    else if (req.url === '/data')  // Requisição página /data
        paginaData(req, res)
    else if (req.url === '/hora') // Requisição página /hora
        paginaHora(req, res)
    else if (req.url === '/dataHora') // Requisição página /dataHora
        paginaDataHora(req, res)
    else {
        // Código 404 indica erro (recurso não localizado)
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        // Chama a função que finaliza a conexão, enviando a resposta
        res.end("Não foi possível acessar o caminho: " + req.url);
    }
})

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando no endereço http://${hostname}:${porta}/`);
})

function paginaPrincipal(req, res) {
    // Prepara o cabeçalho da resposta
    res.writeHead(200, { ' Content-Type': 'text/html; charset=utf-8' })
    // Chama a função que finaliza a conexão, enviando a resposta
    res.end(
        `
        <html>
            <head>
                <meta charset="utf-8 /">
                <title>Aplicação Data/Hora</title>
            </head>
            <body>
                <h1>Aplicação Data/Hora.</h1>
                <h3>Aqui é possível consultar a data e/ou hora atual</h3>
                <p><a href='/data'>Consultar a Data Atual</a></p>
                <p><a href='/hora'>Consultar a Hora Atual</a></p>
                <p><a href='/dataHora'>Consultar a Data e Hora Atual</a></p>
            </body>
        </html>
        `
    );
}

function paginaData(req, res) {
    // prepara o cabeçalho da resposta
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // chama a função que finaliza a conexão, enviando a resposta
    res.end(
        `<html>
            <head>
                <meta charset="utf-8" />
                <title>Data Atual</title>
            </head>
            <body>
                <h1>Página para exibir a data atual.</h1>
                <p>Data atual: </p>
            </body>
        </html>`
    );
}

function paginaHora(req, res) {
    // prepara o cabeçalho da resposta
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // chama a função que finaliza a conexão, enviando a resposta
    res.end(
        `<html>
            <head>
                <meta charset="utf-8" />
                <title>Hora Atual</title>
            </head>
            <body>
                <h1>Página para exibir a hora atual.</h1>
                <p>Hora atual: </p>
            </body>
        </html>`
    );
}

function paginaDataHora(req, res) {
    // prepara o cabeçalho da resposta
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // chama a função que finaliza a conexão, enviando a resposta
    res.end(
        `<html>
            <head>
                <meta charset="utf-8" />
                <title>Data e Hora atual.</title>
            </head>
            <body>
                <h1>Página para exibir a data e hora atual.</h1>
                <p>Data e hora atual: </p>
            </body>
        </html>`
    );
}