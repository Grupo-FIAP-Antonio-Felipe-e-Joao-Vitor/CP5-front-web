const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");

const HOST = "localhost";
const PORT = 5001;

const caminhoUsuarios = path.join(__dirname, "./data/usuarios.json");

const app = express();
app.use(express.json());
app.use(cors());

// Funções para acessar o banco de dados json
const consultarDados = (caminho) => {
    const dados = fs.readFileSync(caminho, { encoding: "UTF-8" });
    return JSON.parse(dados);
};

const salvarDados = (caminho, dados) => {
    fs.writeFileSync(caminho, JSON.stringify(dados, null, 2));
};

// Função para gerar id
const gerarID = (dataBase) => {
    const tamanhoLista = dataBase.length;
    return tamanhoLista + 1;
}

// Registrar usuario
app.post("/registro", async (req, res) => {
    try {
        const { email, cpf, senha } = req.body;
        const usuarios = consultarDados(caminhoUsuarios);
        if (!email || !cpf || !senha) return res.status(400).json({ message: "Todos os dados são obrigatórios." });
        if (usuarios.find(u => u.email === email)) return res.status(400).json({ message: "Este email já está sendo utilizado." });
        if (usuarios.find(u => u.cpf === cpf)) return res.status(400).json({ message: "Este CPF já está sendo utilizado." });

        const hashSenha = await bcrypt.hash(senha, 10);
        const novoUsuario = { id: gerarID(usuarios), email: email, cpf: cpf, senha: hashSenha, role: "User" };
        usuarios.push(novoUsuario);
        salvarDados(caminhoUsuarios, usuarios);
        return res.status(201).json({ message: "Usuário registrado com sucesso." });
    } catch (error) {
        return res.status(500).json({ message: "Erro interno.", error: error });
    }

})

app.listen(PORT, console.log(`Servidor rodando em http://${HOST}:${PORT}`))