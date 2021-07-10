# documentação

## demandas de negocio
- devo conseguir ver todos os posts
- devo conseguir ver um post especifico
- devo conseguir deletar um post
- devo conseguir criar um post
- devo conseguir atualizar post
- devo conseguir atualizar titulo do post
- devo conseguir atualizar qualquer parte do post separadamente

## rotas
{GET}/posts
const getAll que retorna todos os posts

{GET}/posts/:id
const getById pra ver um post especifico

{DELETE}/posts/:id
const deletePost para deletar um post

{POST}/posts/create
const createPost para criar um post

Dados esperados
{
    "id": automático,
    "dataCriacao": automática,
    "titulo": String,
    "conteudo": String,
    "etiquetas": Array
}

{PUT}/posts/:id
const replacePost para atualizar post

{PATCH}/posts/updateTitle/:id
const updateTitle para atualizar o titulo do post

{PATCH}/posts/update/:id
const updateAnything para atualizar qualquer parte do post separadamente