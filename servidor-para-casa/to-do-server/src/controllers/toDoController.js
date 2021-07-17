const tarefasJson = require("../models/tarefas.json");


const getAll = (request, response) => {
    response.status(200).send(tarefasJson);
};

const getById = (request, response) => {
    const idRequirido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)

    response.status(200).send(tarefaFiltrada)
}

const createTask = (request, response) => {
    const descricaoRequirida = request.body.descricao
    const nomeColaboradorRequirido = request.body.nomeColaborador

    const novaTarefa = {
        id: Math.random().toString(32).substr(2, 9),
        dataInclusao: new Date(),
        concluido: false,
        descricao: descricaoRequirida,
        nomeColaborador: nomeColaboradorRequirido
    }

    tarefasJson.push(novaTarefa)


    response.status(200).send(novaTarefa)

}

const deleteTask = (request, response) => {
    const idRequirido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)

    const indice = tarefasJson.indexOf(tarefaFiltrada)
    tarefasJson.splice(indice, 1)

    response.status(200).json([{
        "mensagem": "Tarefa deletada com sucesso",
        tarefasJson
    }])

};
const replaceTask = (request, response)=>{
    let requestedId = request.params.id;
    let taskFromBody = request.body;

    let filteredTask = tarefasJson.find(task=> task.id == requestedId);

    let updatedTask = {
        "id": filteredTask.id,
        "dataInclusao": taskFromBody.dataInclusao,
        "concluido": taskFromBody.concluido,
        "descricao": taskFromBody.descricao,
        "nomeColaborador": taskFromBody.nomeColaborador
    }
    let indice = tarefasJson.indexOf(filteredTask);
    tarefasJson.splice(indice, 1, updatedTask);

    response.status(200).send({"message": "Tarefa substituída com sucesso", updatedTask})
};
const updateDescription =(request,response) =>{
    //pegar os dados da requisição
    let requestedId = request.params.id;
    let newDescription = request.body.descricao;
    //achar o item da lista que tem o mesmo id
    let filteredTask = tarefasJson.find(task=> task.id == requestedId);
    
    filteredTask.descricao = newDescription;

    response.status(200).send({"message": "Descrição atualizada com sucesso", filteredTask})
};

const updateAnything = (request, response) => {
    let requestedId = request.params.id;
    let updatedTask = request.body;
    let filteredTask = tarefasJson.find(task=> task.id == requestedId);

    let keyList = Object.keys(updatedTask);
    keyList.forEach((key)=>{
        filteredTask[key] = updatedTask[key];
    });
    response.status(200).send({"mensagem": "Tarefa atualizada com sucesso.", filteredTask});
};


module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask,
    replaceTask,
    updateAnything,
    updateDescription
}