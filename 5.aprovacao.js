const http = require('node:http');
const url = require('node:url');
const fs = require('node:fs');
const porta = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/html; charset='utf-8'" });
    // processando os dados que foram enviados via método get
    const urlCompleta = new url.URL(req.url, `http://${hostname}:${porta}`);
    let parametros = urlCompleta.searchParams;
    var nota1 = parseFloat(parametros.get('n1'));
    var nota2 = parseFloat(parametros.get('n2'));
    var nota3 = parseFloat(parametros.get('n3'));
    var nota4 = parseFloat(parametros.get('n4'));
    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (req.url === "/") {
        paginaPrincipal(req, res);
    } else if (req.url.startsWith('/resultadoAprovado')){
        paginaAprovado(req, res);
    } else if (req.url.startsWith('/resultadoReprovado')) {
        paginaReprovado(req, res);
    } else if (parametros.has('n1')){
        if(media >= 7){
            paginaAprovado(req, res);
        } else {
            paginaReprovado(req, res);
        }
    } else {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Não foi possível acessar o caminho " + req.url);
    }
});

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando no endereço http://${hostname}:${porta}/`);
});

function paginaPrincipal(req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    try {
        const html = fs.readFileSync('./html/index.html');
        res.write(html);
        res.end();
    } catch (erro) {
        console.error("Houve o seguinte erro ao tentar acessar o arquivo: " + erro);
    }
}

function paginaAprovado(req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset='utf-8'" });
    try {
        const html = fs.readFileSync('./html/resultadoAprovado.html');
        res.write(html);
        res.end();
    } catch (erro) {
        console.error("Houve o seguinte erro ao tentar acessar o arquivo: " + erro);
    }
}

function paginaReprovado(req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset='utf-8'" });
    try {
        const html = fs.readFileSync('./html/resultadoReprovado.html');
        res.write(html);
        res.end();
    } catch (erro) {
        console.error("Houve o seguinte erro ao tentar acessar o arquivo: " + erro);
    }
}