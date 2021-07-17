const series = require("../models/series.json");


const getAll = (request, response) => {
    response.status(200).send(series);
};

const getById = (request, response) => {
    // id solicitado na requição (request)
    const requestedId = request.params.id;

    // find((elemento) => elemento + a lógica)
    const filteredId = series.find(serie => serie.id == requestedId);

    //enviar reposta
    response.status(200).send(filteredId);
};

const getByTitle = (request, response) => {
    // acessando o título solicitado na request
    const requestedTitle = request.query.title.toLowerCase()

    // filtrar os títulos do json
    const filteredTitle = series.find(serie => serie.title.toLowerCase().includes(requestedTitle))

    // adicionar um condição para retornar o título
    if (requestedTitle === "" || filteredTitle === undefined) {
        response.status(404).send({
            "message": "Por favor, insira um título válido."
        })
    } else {
        response.status(200).send(filteredTitle)
    }
};

// pesquisa por gênero
const getByGenre = (request, response) => {
    // acessar qual o gênero requisitado
    const requestedGenre = request.query.genre;
    // criar lista para armazenar dados do loop
    let serieList = [];

    // comparar todos os itens da lista que são daquele gênero
    series.forEach(serie => {
        
        for (genre of serie.genre) {
            if (genre.includes(requestedGenre)) {
                console.log(serie)
                serieList.push(serie)
            }
        }

    })

    // retornar a resposta
    response.status(200).send(serieList)
};
const postSerie = (request, response)=>{
    const {title,
            totalSeasons,
            genre,
            writers,
            poster,
            actors,
            ratings,
    } = request.body;
    
    const savedSerie = {
        id: series.length+1,
        title: title,
        totalSeasons: totalSeasons,
        genre: genre,
        writers: writers,
        poster: poster,
        actors: actors,
        ratings: ratings
        
    }
    series.push(savedSerie);
    response.status(200).send({"message": "Serie incluída com sucesso", savedSerie})
};
const replaceSerie = (request, response)=>{
    let requestedId = request.params.id;
    let serieFromBody = request.body;

    let filteredSerie = series.find(serie=> serie.id == requestedId);

    let updatedSerie = {
        "id": filteredSerie.id,
        "title": serieFromBody.title,
        "totalSeasons": serieFromBody.totalSeasons,
        "genre": serieFromBody.genre,
        "writers": serieFromBody.writers,
        "poster": serieFromBody.poster,
        "actors": serieFromBody.actors,
        "ratings": serieFromBody.ratings
    }
    let indice = series.indexOf(filteredSerie);
    series.splice(indice, 1, updatedSerie)

    response.status(200).send({"message": "Serie substituída com sucesso", updatedSerie})
};
const updateTitle =(request,response) =>{
    //pegar os dados da requisição
    let requestedId = request.params.id;
    let newTitle = request.body.title;
    //achar o item da lista que tem o mesmo id
    let filteredSerie = series.find(serie=> serie.id == requestedId);
    //o título do post filtrado seja igual ao título que vem da requisição
    filteredSerie.title = newTitle;

    response.status(200).send({"message": "Título atualizado com sucesso", filteredSerie})
};
const deleteSerie = (request, response) => {
    let requestedId = request.params.id;
    let filteredSerie = series.find(serie=> serie.id == requestedId);

    let indice = series.indexOf(filteredSerie);
    series.splice(indice, 1);

    response.status(200).send({"message": "Serie deletada com sucesso"})
};
const updateAnything = (request, response) => {
    let requestedId = request.params.id;
    let updatedSerie = request.body;
    let filteredSerie = series.find(serie=> serie.id == requestedId);

    let keyList = Object.keys(updatedSerie);
    keyList.forEach((key)=>{
        filteredSerie[key] = updatedSerie[key];
    });
    response.status(200).send({"mensagem": "Serie atualizada com sucesso.", filteredSerie});
};

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    postSerie,
    replaceSerie,
    updateTitle,
    deleteSerie,
    updateAnything
}