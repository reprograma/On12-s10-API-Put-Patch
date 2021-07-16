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

const replaceTasks=(req,res)=>{
    let requiredId=req.params.id;
    let taskFromBody=req.body;

    let filteredTask=tasksJson.find(task=>task.id==requiredId);

    let updateTask={
       " id": filteredTask.id,
        "dataInclusao": filteredTask.dataInclusao,
        "concluido": taskFromBody.concluido,
        "descricao": taskFromBody.descricao,
        "nomeColaborador": taskFromBody.nomeColaborador
    }
    
    const indice=tasksJson.indexOf(filteredTask);

    tasksJson.splice(indice,1,updateTask);

    res.status(200).send({
        "mensagem":"Task substituido com sucesso",
        updateTask
    })
};

const updateDescription=(req,res)=>{
    let requiredId=req.params.id;
    let newDesciption=req.body.descricao;

    console.log("newDescription",newDesciption);
    console.log("id",requiredId);

    let filteredTask=tasksJson.find(task=>task.id==requiredId);
console.log("Tarefa filtrada",filteredTask);

    filteredTask.descricao=newDesciption;
    console.log("Pós alteração",filteredTask);

    res.status(200).send({
        "mensagem":"Descrição atualizada com sucesso",
        filteredTask
    });
};

const updateAnything=(req,res)=>{
    
    let requiredId=req.params.id;
    console.log("ID",requiredId);

    let filteredTask=tasksJson.find(task=>task.id==requiredId);
    console.log("Post filtrado",filteredTask);

    let updateTask=req.body;
    console.log("Informação do body",updateTask);

    let keyList=Object.keys(updateTask)
    console.log(keyList);

    tasksJson[1]

    keyList.forEach((chave)=>{
        console.log("chave",chave);

        filteredTask[chave]=updateTask[chave]
    });

    res.status(200).send({
        "message":"Task atualizado",
        filteredTask
    })
}



module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask,
    replaceTasks,
    updateDescription,
    updateAnything
}