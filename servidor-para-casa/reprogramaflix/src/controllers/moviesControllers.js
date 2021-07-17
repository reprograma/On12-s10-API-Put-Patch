const movies = require("../models/filmes.json") // importando meu arquivo json dos filmes (que nesse projeto, são os meus dados)


const getAll = (request, response) => {
    response.status(200).send(movies);
};

const getById = (request, response) => {
    // id solicitado na requição (request)
    const requestedId = request.params.id;

    // find((elemento) => elemento + a lógica)
    const filteredId = movies.find(movie => movie.id == requestedId);

    //enviar reposta
    response.status(200).send(filteredId);
};

const getByTitle = (request, response) => {
    // acessando o título solicitado na request
    const requestedTitle = request.query.title.toLowerCase()

    // filtrar os títulos do json
    const filteredTitle = movies.find(movie => movie.title.toLowerCase().includes(requestedTitle))

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
    let movieList = [];

    // comparar todos os itens da lista que são daquele gênero
    movies.forEach(movie => {
        // separar elementos
        let genreList = movie.genre.split(",")

        for (genre of genreList) {
            if (genre.includes(requestedGenre)) {
                console.log(movie)
                movieList.push(movie)
            }
        }

    })

    // retornar a resposta
    response.status(200).send(movieList)
};
const postMovie = (request, response)=>{
    const {title,year,rated,released,runtime,genre,director,writer,actors,plot,language,country,awards} = request.body;
    
    const savedMovie = {
        id: movies.length+1,
        title: title,
        year: year,
        rated: rated,
        released: released,
        runtime: runtime,
        genre: genre,
        director: director,
        writer: writer,
        actors: actors,
        plot: plot,
        language: language,
        country: country,
        awards: awards
    }
    movies.push(savedMovie);
    response.status(200).send({"message": "Filme incluído com sucesso", savedMovie})
};
const replaceMovie = (request, response)=>{
    let requestedId = request.params.id;
    let movieFromBody = request.body;

    let filteredMovie = movies.find(movie=> movie.id == requestedId);

    let updatedMovie = {
        "id": filteredMovie.id,
        "title": movieFromBody.title,
        "year": movieFromBody.year,
        "rated": movieFromBody.rated,
        "released": movieFromBody.released,
        "runtime": movieFromBody.runtime,
        "genre": movieFromBody.genre,
        "director": movieFromBody.director,
        "writer": movieFromBody.writer,
        "actors": movieFromBody.actors,
        "plot": movieFromBody.plot,
        "language": movieFromBody.language,
        "country": movieFromBody.country,
        "awards": movieFromBody.awards
    }
    let indice = movies.indexOf(filteredMovie);
    movies.splice(indice, 1, updatedMovie);

    response.status(200).send({"message": "Filme substituído com sucesso", updatedMovie})
};
const updateTitle =(request,response) =>{
    //pegar os dados da requisição
    let requestedId = request.params.id;
    let newTitle = request.body.title;
    //achar o item da lista que tem o mesmo id
    let filteredMovie = movies.find(movie=> movie.id == requestedId);
    //o título do post filtrado seja igual ao título que vem da requisição
    filteredMovie.title = newTitle;

    response.status(200).send({"message": "Título atualizado com sucesso", filteredMovie})
};
const deleteMovie = (request, response) => {
    let requestedId = request.params.id;
    let filteredMovie = movies.find(movie=> movie.id == requestedId);

    let indice = movies.indexOf(filteredMovie);
    movies.splice(indice, 1);

    response.status(200).send({"message": "Filme deletado com sucesso"})
};
const updateAnything = (request, response) => {
    let requestedId = request.params.id;
    let updatedMovie = request.body;
    let filteredMovie = movies.find(movie=> movie.id == requestedId);

    let keyList = Object.keys(updatedMovie);
    keyList.forEach((key)=>{
        filteredMovie[key] = updatedMovie[key];
    });
    response.status(200).send({"mensagem": "Filme atualizado com sucesso.", filteredMovie});
};

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    postMovie,
    replaceMovie,
    updateTitle,
    deleteMovie,
    updateAnything
}