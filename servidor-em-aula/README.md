# documentação

## demandas de negocio
- devo conseguir ver todos os post OK 
- devo conseguir um post especifico OK
- devo conseguir deletar post 
- devo conseguir criar um post OK
- devo conseguir atualizar post OK 
- devo conseguir atualizar titulo do post OK 
- devo conseguir atualizar qualquer parte do post separadamente

## rotas

{GET}/posts
const getAll que retorna todos os posts

{GET}/:id
const getById para ver um post especifico

{DELETE}/posts/:id
const deletePost para deletar um post

{POST}/posts/create
const createPost para criar um post

{PUT}/posts/:id
const replacePost para atualizar post

{PATCH}/posts/updateTittle/:id
const updateTittle para atualizar o titulo do post

{PATCH}/posts/update/:id
const updateAnything para atualizar qualquer parte do post separadamente
