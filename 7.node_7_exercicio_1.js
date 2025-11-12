const http = require('node:http'); // Cria a constante http
const url = require('node:url'); // Cria a constante url

const hostname = '127.0.0.1'; // Cria a constante hostname
const porta = 3000; // Cria a constante porta   

const server = http.createServer((req, res) => {
    // comparação com "startwith" pois pode haver outras informações em seguida, com dados via URL
    if (req.url.startsWith('/formulario')) //requisição página inicia com "Formulário" ? se sim executa o código
        paginaFormulario(req, res);
    else if (req.url.startsWith('/pedido')) // requisição página que irá processar o pedido, via formulário (leitura inicia com pedido ? se sim executa)
        paginaPedido(req, res);
    else {
        paginaPrincipal(req, res);
    }
});

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando no endereço http://${hostname}:${porta}/`);
});

function paginaPrincipal(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    res.end(
        `<html>
            <head>
                <meta charset="UTF-8">
                <title>Página Principal</title>
            </head>
            <body>
                <h1>Exemplo Node.js com mais de uma página.</h1>
                <p>Acesse o Formulário de Pedidos <a href='formulario'>aqui</a></p>
            </body>
        </html>`
    );
}

function paginaFormulario(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    res.end(
        `
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title>Formulário</title>
            </head>
            <body>
                <form action="/pedido" method="get">
                    <label for="nome">Nome</label>
                    <input type="text" name="nome" id="nome">
                    <label for="produto">Produto</label>
                    <input type="text" name="produto" id="produto">
                    <label for="qtd">Quantidade</label>
                    <input type="number" name="qtd" id="qtd">
                    <button type="submit">Enviar</button>
                </form>
            </body>
        </html>
        `
    );
}

function paginaPedido(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});

    let parametros = new url.URLSearchParams(req.url);

    let nome = parametros.get('/pedido?nome');
    let produto = parametros.get('produto');
    let qtd = parametros.get('qtd');

    if(parseInt(qtd) < 0){
        res.end(nome + ", você informou uma quantidade de produtos incorreta, favor fazer a requisição novamente.");
    } else {
        res.end(nome + ", o seu pedido para " + qtd + " item(ns) do produto '" + produto + "' será processado.");
    }
}
