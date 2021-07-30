const tasksJson = require("../models/tarefas.json");

const getAll = (request, response) => {
    response.status(200).send(tasksJson);
};

const getById = (request, response) => {
    const requiredId = request.params.id;
    const filteredTask = tasksJson.find(task => task.id == requiredId);

    response.status(200).send(filteredTask);
};

const createTask = (request, response) => {
    const requiredDescription = request.body.descricao;
    const requiredName = request.body.autor;

    const newTask = {
        id: Math.random().toString(32).substr(2, 9),
        dataInclusao: new Date(),
        concluido: false,
        descricao: requiredDescription,
        nomeColaborador: requiredName
    };

    tasksJson.push(newTask);

    response.status(200).send(newTask);
};

const replaceTask = (request, response) => {
    let requestedId = req.params.id
    let tasksJsonFromBody = req.body
    const filteredTask = tasksJson.find(task => task.id == requestedId);

           let updatedTask = {
            id: filteredTask.id,
            data: tasksJsonFromBody.data,
            descricao: tasksJsonFromBody.description,
            autor: tasksJsonFromBody.autor

           };

           let indice = task.indexOf(filteredTask);
           task.splice(indice, 1, updatedTask)

           res.status(200).send({"message": "Post substituído com sucesso", updatedTask})
}


const updateDescription = (request, response) => {

    let requestedId = req.params.id;
    let newDescription = req.body.description
    let filteredtasks = tasksJson.find(tasksJson => tasksJson.id == requestedId)
    filteredTask.description = newDescription
    res.status(200).send({"message": " Descrição atualizada com sucesso", filteredDescription})
};


const deleteTask = (request, response) => {
    const requiredId = request.params.id;
    const filteredTask = tasksJson.find(task => task.id == requiredId);

    const indice = tasksJson.indexOf(filteredTask);
    tasksJson.splice(indice, 1);

    response.status(200).json([{
        "mensagem": "Tarefa deletada com sucesso",
        tasksJson
    }]);

};


module.exports = {
    getAll,
    getById,
    createTask,
    replaceTask,
    updateDescription,
    deleteTask
};