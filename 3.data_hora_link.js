const http = require('node:http');

const hostname = '127.0.0.1';
const porta = 3000;

// // // const data_atual = new Date(Date.now());
// const data_atual = new Date(Date.now()).toLocaleDateString();
// // const horas = data_atual.getHours();
// const hora_atual = data_atual.toLocaleTimeString();
// // // const minutos = data_atual.getMinutes();
// const data_hora = {
//     data_atual, hora_atual
// }
// // const segundos = data_atual.getSeconds();

const server = http.createServer((req, res) => {
    // const data_atual = new Date(Date.now());
    const data_atual = new Date(Date.now());
    // capturar somente o dia 
    const dia = data_atual.getDate();
    // capturar somente o mês
    const mes = data_atual.getMonth();
    // capturar somente o ano
    const ano = data_atual.getFullYear();

    // const horas = data_atual.getHours();
    const opcoes_hora = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Força o formato 24 horas
    }

    const hora_atual = data_atual.toLocaleTimeString('pt-br', opcoes_hora);
    // const minutos = data_atual.getMinutes();
    const data_hora = {
        data_atual, hora_atual
    }


    if (req.url === '/') // Requisição página principal
        paginaPrincipal(req, res);
    else if (req.url === '/data')  // Requisição página /data
        paginaData(req, res, dia, mes, ano);
    else if (req.url === '/hora') // Requisição página /hora
        paginaHora(req, res, hora_atual)
    else if (req.url === '/dataHora') // Requisição página /dataHora
        paginaDataHora(req, res, dia, mes, ano, hora_atual)
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
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
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

function paginaData(req, res, dia, mes, ano) {
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
                <p>Data atual: ${dia}/${(mes + 1)}/${ano}</p>
                <p><a href="/">Voltar</a></p>
            </body>
        </html>`
    );
}

function paginaHora(req, res, hora_atual) {
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
                <p>Hora atual:  ${hora_atual}</p>
                <p><a href="/">Voltar</a></p>
            </body>
        </html>`
    );
}

function paginaDataHora(req, res, dia, mes, ano, hora_atual) {
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
                <p>Data e hora atual: ${dia}/${(mes + 1)}/${ano} - ${hora_atual} </p>
                <p><a href="/">Voltar</a></p>
            </body>
        </html>`
    );
}