const express = require("express"); // importa o módulo express neste arquivo
const app = express(); // iniciando o express

// Rota 1: Página inicial
app.get("/", function(req, res){
    res.send("<h1>Bem-vindo ao Projeto de Nuvem!</h1><p>Esta é a página inicial da nossa aplicação.</p>");
});

// Rota 2: Página de equipe/sobre
app.get("/equipe", function(req, res){
    res.send("<h1>Nossa Equipe</h1><p>Esta aplicação foi desenvolvida para a disciplina de Desenvolvimento de Software em Nuvem.</p>");
});

// Rota 3: Página com parâmetro (Exemplo: /usuario/tiago)
app.get("/usuario/:nome", function(req, res){
    let nomeUsuario = req.params.nome;
    res.send("<h1>Perfil do Usuário</h1><p>Muito bem-vindo, <strong>" + nomeUsuario + "</strong>!</p>");
});

// Mantive a configuração de porta do professor, que é excelente para o deploy no Railway e AWS
app.listen(process.env.PORT ?? 3000, function(erro){  
    if (erro){
        console.log("Erro ao Iniciar o servidor.");
    } else {
        console.log("Servidor Iniciado com sucesso na porta 3000 ou na porta da nuvem.");
    }
});
