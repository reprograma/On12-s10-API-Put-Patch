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

    if (requestedTitle && requestedContent && requestedLabels) {
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
    } else {
        res.status(404).send({ "message": "Não foi possível cadastrar um novo post. Por favor, insira todas as informações necessárias" })
    }

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

// const para atualizar qualquer coisa
const updateAnything = (req, res) => {
    // trazer os dados da requisição
    let requestedId = req.params.id;
    // pelo id, eu encontro o item a ser atualizado
    let filteredPost = postsJson.find(post => post.id == requestedId);
    let updatedPost = req.body;

    let keyList = Object.keys(updatedPost);
    // fazer a substituição do valor da chave enviada para o valor da chave atual

    keyList.forEach((key) => {

        // filteredPost[algumaCoisa] = updatedPost[algumaCoisa]
        filteredPost[key] = updatedPost[key];
    });

    res.status(200).send({
        "message": "Post atualizado com sucesso",
        filteredPost
    });
};

// const para deletar post
const deletePost = (request, response) => {
    const requestedId = request.params.id;
    const filteredPost = postsJson.find(post => post.id == requestedId);

    const index = postsJson.indexOf(filteredPost);

    postsJson.splice(index, 1);

    response.status(200).json([{
        "mensagem": "Post deletado com sucesso",
        postsJson
    }]);
};

module.exports = { getAll, getById, createPost, replacePost, updateTitle, updateAnything, deletePost }