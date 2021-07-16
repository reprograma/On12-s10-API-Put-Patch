const tarefasJson = require("../models/tarefas.json");

const getAll = (request, response) => {
    response.status(200).send(tarefasJson);
};

const getById = (request, response) => {
    const idRequerido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido)

    response.status(200).send(tarefaFiltrada)
}

const createTask = (request, response) => {
    const descricaoRequirida = request.body.descricao
    const nomeColaboradorRequirido = request.body.nomeColaborador

    if (descricaoRequirida && nomeColaboradorRequirido){
    const novaTarefa = {
        id: Math.random().toString(32).substr(2, 9),
        dataInclusao: new Date(),
        concluido: false,
        descricao: descricaoRequirida,
        nomeColaborador: nomeColaboradorRequirido
    }

    tarefasJson.push(novaTarefa)
    response.status(200).send({
        "message": "Tarefa criada com sucesso!",
        novaTarefa})
    }else{
        response.status(404).send({
            "message": "Não foi possivel criar a tarefa, insira todas as informações corretamente."
        })
    }
}

const deleteTask = (request, response) => {
    const idRequerido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido)

    const indice = tarefasJson.indexOf(tarefaFiltrada)
    tarefasJson.splice(indice, 1)

    response.status(200).json([{
        "mensagem": "Tarefa deletada com sucesso",
        tarefasJson
    }])

}
const replaceTask = (request, response) => {
     const idRequerido = request.params.id
     let taskFromBody = request.body
     const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido)

     let updateTask = {
         "id": idRequerido.id,
         "dataInclusao": idRequerido.dataInclusao,
         "concluido": idRequerido.concluido,
         "descricao": taskFromBody.descricao,
         "nomeColaborador": taskFromBody.nomeColaboradorRequirido
     }
     const indice = tarefasJson.indexOf(tarefaFiltrada)
     tarefasJson.slice(indice, 1 , updateTask)

     response.status(200).send({
            "message": "Nova tarefa inclusa!",
            updateTask
     })
}
const updateTitle = (request, response) => {
    const idRequerido = request.params.id
    let newdescricao = request.body.descricao
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido)

    tarefaFiltrada.descricao = newdescricao
    response.status(200).send({
        "message": "Descrição da tarefa atualizada com sucesso!",
        tarefaFiltrada
    })
}
// const updateAnyThing = (request, response) => {
//     const idRequerido = request.params.id 
//     const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido)

//     let update = request.body

//     let keyList = Object.keys(tarefaFiltrada)
//     keyList.forEach((key) => {
//         tarefaFiltrada[key] = update[key]
//     })
    
//     response.status(200).send({
//         "message": "Informação atualizada com sucesso.",
//         tarefaFiltrada
//     })
// }

module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask,
    replaceTask,
    updateTitle,
}