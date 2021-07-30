### Turma Online 12|Back-end|2021|Métodos:PUT e PATCH

É aí que começa a confusão para uma developer inexperiente:

Como assim dois métodos para uma única operação? Uso **PATCH** ou **PUT** pra atualizar meu recurso?

O **Put** substitui todos os atuais dados do recurso de destino pelos dados passados na requisição.  Uma atualização integral. Existe, então, a possibilidade de atualizar todo o recurso em apenas uma requisição.

O **Patch** aplica modificações parciais em um recurso. Logo, é possível modificar apenas uma parte do recurso, subconjunto de uma atualização completa(PUT), estamos falando de uma atualização parcial, o que torna as coisas mais flexíveis.

### Referências

(https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) Acessado em 26/07/2021

(https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH) Acessado em 26/07/2021

## Para casa

Complete um crud do reprogramaflix e do to-do-server

Na pasta extra/ você pode encontrar alguns outros arquivos jsons para criar CRUDs completos do zero :dancers:

### Demandas de negócio

* Devo conseguir ver todos os filmes
* Devo conseguir ver um post especifico
* Devo conseguir deletar um filme
* Devo conseguir criar um filme
* Devo conseguir atualizar filme
* Devo conseguir atualizar titulo do filme
* Devo conseguir atualizar qualquer parte do filme publicado

### Tarefas

* **{GET}** ("/")const **getAll** que retorna todos os filme.

* **{GET}** ("/:id") const **getById** retorna um entidade especifica.

* **{DELETE}** ("/: id")" const **deleteMovie** para deletar um filme

* **{POST}** ("/cadastrar) const **createMovie** para criar um filme

* **Dados esperados** {"id": automático, "dataCriacao": automática, "titulo": String, "conteudo": String, "etiquetas": Array}

* **{PUT}** ("/atualizar) const **replaceMovie** para atualizar filme

* **{PATCH}** ("/atualizarTitle) **updateTitle** para atualizar o titulo do filme.

* **{PATCH}** ("/atualizarAnything") **updateAnything** para atualizar qualquer parte do filme revelado.