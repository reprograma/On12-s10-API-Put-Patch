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

const createMovie=(req,res)=>{
    let requestedTitle=req.body.title 
    let requestedYear=req.body.year
    let requestedRated=req.body.rated
    let requestedReleased=req.body.released
    let requestedRuntime=req.body.runtime
    let requestedGenre=req.body.genre
    let requestedDirector=req.body.director
    let requestedWriter=req.body.writer
    let requestedActors=req.body.actors
    let requestedPlot=req.body.plot
    let requestedLanguage=req.body.language
    let requestedCountry=req.body.country
    let requestedAwards=req.body.awards

    console.log(req.body);

    let newMovie={
        "id":Math.random().toString(32).substr(2,6),
        "title": requestedTitle,
        "year": requestedYear,
        "rated":requestedRated,
        "released":requestedReleased,
        "runtime": requestedRuntime,
        "genre": requestedGenre,
        "director":requestedDirector,
        "writer": requestedWriter,
        "actors": requestedActors, 
        "plot": requestedPlot,
        "language": requestedLanguage,
        "country": requestedCountry,
        "awards": requestedAwards
    };

    movies.push(newMovie);

   res.status(201).send({
        "message":"Filme criado com sucesso",
        newMovie
    });
}

const deleteMovie = (request, response) => {
    const requiredId = request.params.id;
    const filteredMovie = movies.find(filme =>filme.id == requiredId);

    const indice = movies.indexOf(filteredMovie);
    movies.splice(indice, 1);

    response.status(200).json([{
        "mensagem": "Tarefa deletada com sucesso",
        movies
    }]);

};

//substituir todo item da lista do json
const replaceMovie=(req,res)=>{
    //acessar os dados da requisição
    let requestedId=req.params.id;
    let filmeFromBody=req.body;
    
   let filteredMovie = movies.find(filme =>filme.id == requestedId);
    
    let updateMovie={
        "id":filteredMovie.id,
        "title": filmeFromBody.title,
        "year": filmeFromBody.year,
        "rated":filmeFromBody.rated,
        "released":filmeFromBody.released,
        "runtime": filmeFromBody.runtime,
        "genre": filmeFromBody.genre,
        "director":filmeFromBody.director,
        "writer":filmeFromBody.writer,
        "actors":filmeFromBody.actors, 
        "plot":filmeFromBody.plot,
        "language":filmeFromBody.language,
        "country":filmeFromBody.country,
        "awards":filmeFromBody.awards
    }
    
    //substituir o item 
    const indice=movies.indexOf(filteredMovie);
    
    movies.splice(indice,1,updateMovie);
    
    //enviar resposta 
    res.status(200).send({
        "mensagem":"Filme substituido com sucesso ",
        updateMovie
    })
    };

    const updateTitle=(req,res)=>{
        //pegar os daos da requisição
        let requestedId=req.params.id;
        let newTitle=req.body.title;
    
        //achar o item da lista que tem o mesmo id 
        let filteredMovie = movies.find(filme =>filme.id == requestedId);

        //o ttulo do post filtrado seja igual ao título que vem da requisição
    
        filteredMovie.title=newTitle;
    
        res.status(200).send({
            "mensagem":"Titulo atualizado com sucesso",
            filteredMovie
        });
    };
    
    const updateAnything=(req,res)=>{
            //pegar o id solicitado na requisição
            let requestedId=req.params.id;
            console.log("ID",requestedId);
    
            //pelo ID, eu encontro o item a ser atualizado
            let filteredMovie = movies.find(filme =>filme.id == requestedId);
            console.log("Post filtrado",filteredMovie);
    
            let updateMovie=req.body;
            console.log("informações do body",updateMovie);
    
            let keyList=Object.keys(updateMovie)
            console.log(keyList);
            //fazer substituição do valor da chave enviada para o valor da chave atual 
    
            movies[1]//lista->item que representa o meu indice 
            
    
            keyList.forEach((chave)=>{
                console.log('chave',chave);
                
                //filteredPost[alguma coisa]=updatePost[alguma coisa]
                filteredMovie[chave]=updateMovie[chave]
            });
    
            res.status(200).send({
                "message":"Filme atualizado",
                filteredMovie
            })
    
        };
    

module.exports = {
    home,
    getAll,
    getById,
    getByTitle,
    getByGenre,
    createMovie,
    deleteMovie,
    replaceMovie,
    updateTitle,
    updateAnything
}