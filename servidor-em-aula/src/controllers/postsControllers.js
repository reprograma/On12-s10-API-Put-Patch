const postsJson = require("../models/posts.json");

const getAll = (req, res) => {
    res.status(200).send(postsJson);
}

const getById = (req, res) => {
    const requestedId = req.params.id 
    const filteredId = postsJson.find(post => post.id == requestedId)
    //retornando o id filtrado do post
    res.status(200).send(filteredId)
}
const createPost = (req, res) => {
    //acessar os dados enviados na requisição 
    let requestedTitle = req.body.titulo
    let requestedContent = req.body.conteudo
    let requestedLabels = req.body.etiquetas

    const newPost = {
        "id": Math.random.toString(32).substr(2, 6),
        "dataCriacao": new Date(),
        "titulo": requestedTitle,
        "conteudo": requestedContent,
        "etiquetas": requestedLabels
    };
    postsJson.push(newPost);

    res.status(200).send([
        {
            "message": "Post criado com sucesso!"
            ,newPost
        }
    ]);
}
const replacePost = (req, res) => {
    //acessar os dados da requisição
    let requestedId = req.params.id;
    let postFromBody = req.body; //alterações que vao no body

    let filteredId = postsJson.find(post => post.id == requestedId)

    let updatedPost = {
        "id": filteredId.id,
        "dataCriacao": filteredId. dataCriacao, 
        "titulo": postFromBody.titulo, 
        "conteudo": postFromBody.conteudo, 
        "etiquetas": postFromBody.etiquetas
    }
    //substituir o item
    const indice = postsJson.indexOf(filteredId);
    //splice(indice, quantos elementos quero que remova, o que épra ser adicionado)
    postsJson.splice(indice, 1, updatedPost)

    //enviar resposta
    res.status(200).send({
        "message": "Post substituido com sucesso",
        updatedPost
    })
}

const updateTitle = (req, res) => {
    let requestedId = req.params.id;
    let newTitle = req.body.titulo;

    let filteredId = postsJson.find(post => post.id == requestedId)

    filteredId.titulo = newTitle; 

    res.status(200).send({
        "message": "Titulo atualizado com sucesso!",
        filteredId
    })
}
const updateAnything = (req, res) => {
    
}

 module.exports = {
     getAll,
     getById,
     createPost,
     replacePost, 
     updateTitle
 }