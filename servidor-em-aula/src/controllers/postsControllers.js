const postsJson = require("../models/posts.json");

const getAll = (req, res)=>{
    res.status(200).send(postsJson);
};

const getById = (req, res) => {
    let requestedId = req.params.id;
    let filteredId = postsJson.find(post=>post.id == requestedId);
    res.status(200).send(filteredId);
};

const createPost = (req, res)=>{

    let requestedTitle = req.body.titulo
    let requestedContent  = req.body.conteudo
    let requestLabels = req.body.etiquetas

    let newPost =
        {
            "id": Math.random().toString(32).substr(2,6), 
            "dataCriacao": new Date(),
            "titulo": requestedTitle,
            "conteudo": requestedContent,
            "etiquetas": requestLabels
        }
        postsJson.push(newPost);

        res.status(201).send({"mensagem":"Post criado! ✅", newPost});
    };
    
const replacePost = (req, res)=>{

    let requestedId = req.params.id;
    let postFromBody = req.body;

    let filteredPost = postsJson.find(post=> post.id == requestedId);

    let updatedPost = {
        "id": filteredPost.id,
        "dataCriação": filteredPost.dataCriação,
        "titulo": postFromBody.titulo,
        "conteudo": postFromBody.conteudo,
        "etiquetas": postFromBody.etiquetas
    }


    let indice = postsJson.indexOf(filteredPost);
    postsJson.splice(indice, 1, updatedPost)

    res.status(200).send({"message": "Post substituído! ✅", updatedPost})
};

const updateTitle =(req,res) =>{

    let requestedId = req.params.id;
    let newTitle = req.body.titulo;

    let filteredPost = postsJson.find(post=> post.id == requestedId);

    filteredPost.titulo = newTitle;

    res.status(200).send({"message": "Título atualizado! ✅", filteredPost})
};

module.exports = {
    getAll, 
    getById, 
    createPost, 
    replacePost, 
    updateTitle}