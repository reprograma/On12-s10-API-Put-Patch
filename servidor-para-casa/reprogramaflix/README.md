# documentação

## demandas de negocio
- devo conseguir ver todos os filmes
- devo conseguir ver um post especifico
- devo conseguir deletar um filme
- devo conseguir criar um filme
- devo conseguir atualizar filme
- devo conseguir atualizar titulo do filme
- devo conseguir atualizar qualquer parte do filme separadamente

## rotas
{GET}/filmes/todos
const getAll que retorna todos os filme
{GET}/filmes/titulo
{GET}/filmes/genero
{GET}/filmes/:id

{DELETE}/filmes/:id
const deleteMovie para deletar um filme

{POST}/filmes/create
const createMovie para criar um filme

Dados esperados
{
        "id":String
        "title": String,
        "year": String,
        "rated":String,
        "released":String,
        "runtime": String,
        "genre": String,
        "director":String,
        "writer": String,
        "actors": String, 
        "plot": String,
        "language": String,
        "country": String,
        "awards": String

{PUT}/filmes/:id
const replaceMovie para atualizar filme

{PATCH}/filmes/updateTitle/:id
const updateTitle para atualizar o titulo do filme

{PATCH}/filmes/update/:id
const updateAnything para atualizar qualquer parte do filme separadamente