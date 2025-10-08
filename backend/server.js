const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");

const JWT_SECRET = "846e2ed72bc108eed63b825c812875a2";
const HOST = "localhost";
const PORT = 5001;

const caminhoUsuarios = path.join(__dirname, "./data/usuarios.json");
const caminhoPlanos = path.join(__dirname, "./data/planos.json");

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
        const novoUsuario = { id: gerarID(usuarios), email: email, cpf: cpf, hashSenha: hashSenha, role: "User" };
        usuarios.push(novoUsuario);
        salvarDados(caminhoUsuarios, usuarios);
        return res.status(201).json({ message: "Usuário registrado com sucesso." });
    } catch (error) {
        return res.status(500).json({ message: "Erro interno.", error: error });
    };
});

// Login de usuarios
app.post("/login", async (req, res) => {
    try {
        const { usuario, senha } = req.body;
        const usuarios = consultarDados(caminhoUsuarios);

        if (!usuario || !senha) return res.status(400).json({ message: "Todos os dados são obrigatórios." });

        const user = usuarios.find((u) => {
            return u.email === usuario || // logando com email
                u.cpf === usuario             // logando com cpf
        });

        if (!user) return res.status(404).json({ message: "Usuário não encontrado." });

        const senhaCorreta = await bcrypt.compare(senha, user.hashSenha);
        if (!senhaCorreta) return res.status(400).json({ message: "Senha incorreta." })
        if (senhaCorreta) {
            const token = jwt.sign(
                { id: user.id, email: user.email, cpf: user.cpf, role: user.role },
                JWT_SECRET,
                { expiresIn: "10m" }
            )


            return res.status(200).json({
                message: "Usuario logado com sucesso.",
                usuario: { id: user.id, email: user.email, cpf: user.cpf, role: user.role },
                token: token
            })
        }


    } catch (error) {
        return res.status(500).json({ message: "Erro interno.", error: error });
    };
})

// CRUD planos

// Verificar se o usuario está logado
const autenticaToken = (req, res, next) => {
    const auth = req.headers['authorization']; // tudo minúsculo!
    console.log("Header recebido:", auth); // <--- log importante

    const token = auth && auth.split(' ')[1];
    if (!token) {
        console.log("Nenhum token recebido!");
        return res.sendStatus(401);
    }

    jwt.verify(token, JWT_SECRET, (error, user) => {
        if (error) {
            console.log("Erro ao verificar token:", error.message);
            return res.sendStatus(403);
        }
        console.log("Token verificado com sucesso:", user);
        req.user = user;
        next();
    });
};


// Adicionar plano
app.post("/planos", autenticaToken, (req, res) => {
    try {
        const { nome, beneficios, tempo, preco } = req.body;
        const planos = consultarDados(caminhoPlanos);

        if (req.user.role !== "Admin") return res.status(401).json({ message: "Você não possui permissão para acessa esta área." })

        if (!nome || !beneficios || !tempo || !preco) return res.status(400).json({ message: "Todos os dados são obrigatórios." });

        if (planos.find((plano) => plano.nome === nome)) return res.status(400).json({ message: "Já existe um plano com esse nome." });

        const novoPlano = { id: gerarID(planos), nome: nome, beneficios: beneficios, tempo: tempo, preco: preco };
        planos.push(novoPlano);
        salvarDados(caminhoPlanos, planos);

        return res.status(201).json({ message: "Plano criado com sucesso." })
    } catch (error) {
        return res.status(500).json({ message: "Erro interno.", error: error });
    }
})

// Ver todos os planos
app.get("/planos", (req, res) => {
    try {
        const planos = consultarDados(caminhoPlanos);
        res.status(200).json({ planos: planos });
    } catch (error) {
        return res.status(500).json({ message: "Erro interno.", error: error });
    }
})


app.listen(PORT, console.log(`Servidor rodando em http://${HOST}:${PORT}`))