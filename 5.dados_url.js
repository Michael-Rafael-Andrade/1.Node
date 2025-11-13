const http = require('node:http');
const url = require('node:url');

const hostname = '127.0.0.1';
const porta = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset='utf-8'"});

    //processando os dados que foram enviados via método GET
    let parametros = new url.URLSearchParams(req.url);

    var nome = parametros.get('/?nome');
    var produto = parametros.get('produto');
    var qtd = parametros.get('qtd');

    if(parseInt(qtd) < 0){
        res.end(nome + ", você informou uma quantidade de produtos incorreta, favor fazer a requisião novamente.");
    } else {
        res.end(nome + ", o seu pedido para " + qtd + " item(ns) do produto '" + produto + "' será processado.");
        // Código para realizar outros processamentos
    }
});

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando no endereço http://${hostname}:${porta}/`);
});

// localhost:3000/?nome=João&produto=Camiseta&qtd=3;