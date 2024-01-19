// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express');
// Chama a função express
const app = express();

// Criar a rota do tipo GET direcionado para a pagina inicial do projeto
app.get('/', function (req, res) {
    // Retornar a frase
    res.send('Página inicial do site');
  });
  
// Criar a rota do tipo GET direcionado para a pagina sobre empresa do site
app.get('/sobre-empresa', (req, res) => {
    // Retornar a frase
    res.send('Página sobre empresa do site');
  });

// Criar a rota do tipo GET direcionado para a pagina de contato do site
app.get('/contato', (req, res) => {
    // Retornar a frase
    res.send('Página sobre contato do site');
  });

// Iniciar o servidor na rota 8080
app.listen(8080, () =>  {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080');
});