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

const createMovies = (request, response) => {

     const titleRequerido = request.body.title
     const genreRequerido = request.body.genre
     const languageRequerido = request.body.language
     const yearRequerido = request.body.year

    const novoMovie = {

        id: movies.length+1,
        title: titleRequerido,
        genre: genreRequerido, 
        language: languageRequerido,
        year : yearRequerido

    };

    movies.push(novoMovie);

    response.status(201).send({
        "message":"Filme criado com sucesso",
        novoMovie
    }); 
};


//substituir todo o item da lista do json
const replaceMovie = (req, res)=>{
    //acessar os dados da requisição
        let requestedId = req.params.id;
        let movieFromBody = req.body;
    
        let filteredMovie = movies.find(movie => movie.id == requestedId)
    //solução criativa para mesclar os itens alterados com os itens que não serão alterados
        let updatedMovies = {
            "id": filteredMovie.id,
            "title": movieFromBody.title,
            "genre": movieFromBody.genre,
            "country": movieFromBody.country

        }

    
    //subistituir o item

    let indice = movies.indexOf(filteredMovie);
    movies.splice(indice, 1, updatedMovies)
//enviar resposta
    res.status(200).send({"message": "Post substituído com sucesso", updatedMovies})
};


const updateTitle = (req, res) => {
    let requestedId = req.params.id;
    let newTitle = req.body.title
    let filteredMovie = movies.find(movie => movie.id == requestedId)
    filteredMovie.title = newTitle
    res.status(200).send({"message": "Titulo atualizado com sucesso", filteredMovie})
};

const  updateAnything = ( req , res ) => {
    // pegar o id solicitado na requisição
    let  requestedId = req . params . id ;
    console . log ( "ID" , requestId ) ;

    // pelo ID, eu encontro o item a ser atualizado
    let filterMovie  =  movies . find ( filme  => filme . id  ==  RequestId ) ;
    console . log ( "Post filtrado" , filteredMovie ) ;

    let updateMovie = req . corpo ;
    console . log ( "informações do corpo" , updateMovie ) ;

    let  keyList = Object . chaves ( updateMovie )
    console . log ( keyList ) ;
    // fazer substituição do valor da chave canalizado para o valor da chave atual 

    filmes [ 1 ] // lista-> item que representa o meu índice
    

    keyList . forEach ( ( chave ) => {
        console . log ( 'chave' , chave ) ;
        
        // filterPost [alguma coisa] = updatePost [alguma coisa]
        filteredMovie [ chave ] = updateMovie [ chave ]
    } ) ;

    res . status ( 200 ) . enviar ( {
        "mensagem" : "Filme atualizado" ,
        filterMovie
    } )

} ;



const deletarMovies = (request, response) => {
    const idRequerido = request.params.id;

    const moviesFiltrado = movies.find(movie => movie.id == idRequerido);

    const indice = movies.indexof(moviesFiltrado);
    console.log(indice);
   
    movies.splice(indice, 1);

    response.status(200).send(
        [
            {
                "Mensagem":"Contato deletado com sucesso "
            },
            movies
        ]
    )

}


module.exports = {
    home,
    getAll,
    getById,
    getByTitle,
    getByGenre,
    createMovies,
    replaceMovie,
    updateAnything,
    updateTitle,
    deletarMovies
};