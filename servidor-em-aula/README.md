# documentação

## demandas de negocio
- devo conseguir ver todos os post
- devo conseguir um post especifico
- devo conseguir deletar post
- devo conseguir criar um post
- devo conseguir atualizar post
- devo conseguir atualizar titulo do post
- devo conseguir atualizar qualquer parte do post separadamente

## rotas
{GET}/posts
const getAll - retorna todos os posts

{GET}/posts/:id
const getById - retorna um post especifico

{DELETE}/POST/:id
const delePost - deletar um post especifico

{POSTS}/post/create
const createPost - criar um post 

Dados esperados
{
    "id": automático,
    "dataCriacao": automática,
    "titulo": String,
    "conteudo": String,
    "etiquetas": Array
}

{PUT}/posts
const replacePost - atualizar um post

{PATCH}/posts/updateTitle/:id
const updateTitle para atualizar o titulo do post

{PATCH}/posts/update/:id
const updateAnything - atualizar qualquer parte do post separadamente



