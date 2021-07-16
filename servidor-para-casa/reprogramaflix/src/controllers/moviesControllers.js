const movies = require("../models/filmes.json") // importando meu arquivo json dos filmes (que nesse projeto, são os meus dados)

// definir uma rota padrão
const home = (request, response) => {
    response.status(200).send(
        {
            "message": "Olá pessoa, seja bem vinda ao {reprograma}flix <3 <3 <3"
        }
    )
};

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
}

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
}
const criateMovie = (request, response) => {

    let reqTitle = request.body.title;
    let reqYear = request.body.year;
    let reqRated = request.body.rated;
    let reqReleased = request.body.released;
    let reqRuntime = request.body.runtime;
    let reqGenre = request.body.genre;
    let reqDirector = request.body.director;
    let reqWriter = request.body.writer;
    let reqActors = request.body.actors;
    let reqPlot = request.body.plot;
    let reqLanguage = request.body.language;
    let reqCountry = request.body.country;
    let reqAwards = request.body.awards

 if (reqTitle && reqYear && reqRated && reqReleased && reqRuntime && reqGenre && reqDirector && reqWriter && reqActors && reqPlot && reqLanguage && reqCountry && reqAwards) {
    let newMovie = {
        id: Math.random().toString(32).substr(10, 5),
        title: reqTitle,
        year: reqYear,
        rated: reqRated,
        released: reqReleased,
        runtime: reqRuntime,
        genre: reqGenre,
        director: reqDirector,
        writer: reqWriter,
        actors: reqActors,
        plot: reqPlot,
        language: reqLanguage,
        country: reqCountry,
        awards: reqAwards
    }
    movies.push(newMovie)

    response.status(201).send({
        "message": "Novo filme criado com sucesso!",
        newMovie
    })
} else{
    response.status(404).send({ "message": "Não foi possivel cadastrar novo filme, insira todas as informações corretamente." })
    }
}

const deletMovie = (request, response) => { //deletar movie por id 
    const requestedId = request.params.id
    const filteredId = movies.find(movie => movie.id == requestedId)

    const indice = movies.indexOf(filteredId)
    movies.splice(indice, 1 )

    response.status(200).send({
        "message": "Filme deletado com sucesso",
        movies

    })
}
//substituir todo o item da lista do json
const replaceMovie = (request, response) => {
    const requestedId = request.params.id
    let movieAtualizado = request.body

    let filteredId = movies.find(movie => movie.id == requestedId)

    let updateMovie = {
        "id": filteredId.id,
        "title": movieAtualizado.title,
        "year": movieAtualizado.year,
        "rated": movieAtualizado.rated,
        "released": movieAtualizado.released,
        "runtime": movieAtualizado.runtime,
        "genre": movieAtualizado.genre,
        "director": movieAtualizado.director,
        "writer": movieAtualizado.writer,
        "actors": movieAtualizado.actors,
        "plot": movieAtualizado.plot,
        "language": movieAtualizado.language,
        "country": movieAtualizado.country,
        "awards": movieAtualizado.awards
    }

    const indice = movies.indexOf(filteredId)
    movies.splice(indice, 1, updateMovie)

    response.status(200).send({
        "message": "Filme atualizado com sucesso!",
        updateMovie
    })
}
//atualizar apenas o titulo
const updateTitle = (request, response) => {
    const requestedId = request.params.id
    let newTitle = request.body.title

    const filteredId = movies.find(movie => movie.id == requestedId)
    filteredId.title = newTitle

    response.status(200).send({
        "message": "Titulo atualizado com sucesso!"
    })

}
//atualizar qualquer outra parte
// const updateAnyThing = (request, response) => {
//     let requestedId = request.params.id
//     let filteredId = movies.find(movie => movie.id == requestedId)

//     let update = request.body
//     let keyList = Object.keys(update) //substituiçao da chave enviada para chave atual

//     keyList.forEach((key) => {
//         filteredId[key] = update[key]
//         })

//     response.status(200).send({ "message": "Informação do filme atualizado com sucesso!", filteredId})
// }

module.exports = {
    home, getAll, getById, getByTitle, getByGenre,  criateMovie, deletMovie, replaceMovie,  updateTitle
} 