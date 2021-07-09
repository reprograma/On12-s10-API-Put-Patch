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
[GET] "/posts"
getAll que retorna todos os posts

[GET] "/posts/:id"
getById que retorna um post especifico

[DELETE] "/posts/:id"
deletePost deleta um post

[POST] "/posts/create"
createPost criar publicação
