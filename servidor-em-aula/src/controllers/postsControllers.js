const postsJson = require("../models/posts.json");

const getAll = (req, res) => {
    res.status(200).send(postsJson);
};

const getById = (req, res) => {
    // pegar o id solicitado na requisição
    let requestedId = req.params.id;
    let filteredPost = postsJson.find(post => post.id == requestedId);

    // enviar uma resposta
    res.status(200).send(filteredPost);
};

// adicionar um post
const createPost = (req, res) => {
    // acessar os dados enviados na requisição
    let requestedTitle = req.body.titulo;
    let requestedContent = req.body.conteudo;
    let requestedLabels = req.body.etiquetas;

    let newPost = {
        "id": Math.random().toString(32).substr(2, 6),
        "dataCriacao": new Date(),
        "titulo": requestedTitle,
        "conteudo": requestedContent,
        "etiquetas": requestedLabels
    };

    postsJson.push(newPost);

    // enviar uma resposta
    res.status(201).send({
        "mensagem": "Post criado com sucesso",
        newPost
    });
};

// substituir todo item da lista do json
const replacePost = (req, res) => {
    // acessar os dados da requisição
    let requestedId = req.params.id;
    let postFromBody = req.body;

    let filteredPost = postsJson.find(post => post.id == requestedId);

    let updatedPost = {
        "id": filteredPost.id,
        "dataCriacao": filteredPost.dataCriacao,
        "titulo": postFromBody.titulo,
        "conteudo": postFromBody.conteudo,
        "etiquetas": postFromBody.etiquetas
    };

    // substituir o item
    const indice = postsJson.indexOf(filteredPost);
    // splice(indice, quantos elementos quero que remova, o que é pra ser adicionado)
    postsJson.splice(indice, 1, updatedPost);
    // enviar resposta
    res.status(200).send({
        "mensagem": "Post substituído com sucesso",
        updatedPost
    });
};

// atualizar apenas um título
const updateTitle = (req, res) => {
    // pegar os dados da requisição
    let requestedId = req.params.id;
    let newTitle = req.body.titulo;

    // achar o item da lista que tem o mesmo id
    let filteredPost = postsJson.find(post => post.id == requestedId);

    // o título do post filtrado seja igual ao título que vem da requisição
    filteredPost.titulo = newTitle;

    res.status(200).send({
        "mensagem": "Título atualizado com sucesso",
        filteredPost
    });
};


module.exports = { getAll, getById, createPost, replacePost, updateTitle }