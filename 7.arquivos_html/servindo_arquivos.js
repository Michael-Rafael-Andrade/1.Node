const http = require('node:http');
const url = require('node:url');
const hostname = '127.0.0.1';
const porta = 3000;

const server = http.createServer((req, res) => {
    if (req.url == "/"){
        // requisição página principal
        paginaPrincipal(req, res);
    }
    else if(req.url === "/sobre"){
        // requisição página sobre
        paginaSobre(req, res);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8"});
        res.end("Não foi possível acessar o caminho: " + req.url);
    }
});

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando no endereço http://${hostname}:${porta}/`);
});



function paginaPrincipal(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    try{
        const html = fs.readFileSync('./html/index.html');
        res.write(html);
        res.end();
    } catch(erro){
        console.error("Houve o seguinte erro ao tentar acessar o arquivo: " + erro);
    }
}

function paginaSobre(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    try{
        const html = fs.readFileSync('./html/sobre.html');
        res.write(html);
        res.end();
    } catch(erro){

    }
}