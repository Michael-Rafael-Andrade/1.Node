const http = require('node:http'); // cria a constante http
const url = require('node:url'); // cria a constante url
const porta = 3000;
const hostname = '127.0.0.1';


const server = http.createServer((req, res) => {
    if(req.url.startsWith('/paginaMedia')){
        paginaMedia(req, res);
    } else {
        paginaPrincipal(req, res);
    }
});

server.listen(porta, hostname, () => {
    console.log(`Servidor rodando no endereço http://${hostname}:${porta}/`);
});

function paginaPrincipal(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    res.end(`
        <html>
            <head>
                <title>
                    Página Principal
                </title>
                <meta charset="UTF-8">
            </head>
            <body>
                <h2>Informe os números abaixo para o aplicativo poder calcular a média: </h2>
            <form method="POST" action="/paginaMedia">
                <label for="num1">Número 1:</label>
                <p><input type="number" name="num1" id="num1"></p>
                <label for="num2">Número 2:</label>
                <p><input type="number" name="num2" id="num2"></p>
                <label for="num3">Número 3:</label>
                <p><input type="number" name="num3" id="num3"></p>
                <a href="paginaMedia"><button type="submit">Enviar</button></a>
            </form>
            </body>
        </html>
        `);
}

function paginaMedia(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html; charset="UTF-8"' });
    let parametros = new url.URLSearchParams(req.url);
    let numero1 = (parametros.get('/?num1'));
    let numero2 = (parametros.get('num2'));
    let numero3 = (parametros.get('num3'));
    let media = (numero1 + numero2 + numero3) / 3;
    res.end(
        `
        <html>
            <head>
                <meta charset="UTF-8">  
                <title>Página Média</title>
            </head>
            <body>
                <h1>Resultado da Operação</h1>
                <p>numero1 = ${numero1}</p>
                <p>numero2 = ${numero2}</p>
                <p>numero3 = ${numero3}</p>
                <h2>Média dos 3 números: ${media}
            </body>
        </html>
        `
    );
}