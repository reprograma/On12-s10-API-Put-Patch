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
    //acessar os dados enviados na requisição
    let requestedTitle = req.body.titulo
    let requestedContent  = req.body.conteudo
    let requestLabels = req.body.etiquetas
    //adicionar conteudo da requisição no novo post
    let newPost =
        {
            "id": Math.random().toString(32).substr(2,6), //gera um id automático (2,6)removendo os dois primeiros caracteres e apresentando 6 caracteres
            "dataCriacao": new Date(),//gera uma data automática
            "titulo": requestedTitle,
            "conteudo": requestedContent,
            "etiquetas": requestLabels
        }
        postsJson.push(newPost);

        res.status(201).send({"mensagem":"Post criado com sucesso", newPost});
    };
    //substituir todo o item da lista do json
const replacePost = (req, res)=>{
//acessar os dados da requisição
    let requestedId = req.params.id;
    let postFromBody = req.body;

    let filteredPost = postsJson.find(post=> post.id == requestedId);
//solução criativa para mesclar os itens alterados com os itens que não serão alterados
    let updatedPost = {
        "id": filteredPost.id,
        "dataCriação": filteredPost.dataCriação,
        "titulo": postFromBody.titulo,
        "conteudo": postFromBody.conteudo,
        "etiquetas": postFromBody.etiquetas
    }

//subistituir o item

    let indice = postsJson.indexOf(filteredPost);
    postsJson.splice(indice, 1, updatedPost)
//enviar resposta
    res.status(200).send({"message": "Post substituído com sucesso", updatedPost})
};
//atualizar titulo
const updateTitle =(req,res) =>{
    //pegar os dados da requisição
    let requestedId = req.params.id;
    let newTitle = req.body.titulo;
    //achar o item da lista que tem o mesmo id
    let filteredPost = postsJson.find(post=> post.id == requestedId);
    //o título do post filtrado seja igual ao título que vem da requisição
    filteredPost.titulo = newTitle;

    res.status(200).send({"message": "Título atualizado com sucesso", filteredPost})
};

module.exports = {
    getAll, 
    getById, 
    createPost, 
    replacePost, 
    updateTitle}