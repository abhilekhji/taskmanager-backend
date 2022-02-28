const Task = require('../models/taskManager');
createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body);
        res.status(201).json({
            status: true,
            data: task
        });
    } catch(err) {
        res.status(500).json({
            status: false,
            message: err
        });
        console.log(err);
    }
}
getAllTasks = async (req,res) => {
    try {
        const task = await Task.find({});
        res.status(201).json({
            status: true,
            data: task
        });
    } catch(err) {
        res.status(500).json({
            status: false,
            message: err
        });
        console.log(err);
    }
}
getTaskById = (req,res)=>{
    const { id } = req.params;
    try {
        const task = await Task.find({_id: id});
        res.status(201).json({
            status: true,
            data: task
        });
    } catch(err) {
        res.status(500).json({
            status: false,
            message: err
        });
        console.log(err);
    }
}
updateTaskById = (req,res)=>{
    const { id } = req.params;
    res.json({
        status: true,
        id: parseInt(id),
        message: "Update task by Id",
    });
}
deleteTaskById = (req,res)=>{
    const { id } = req.params;
    res.json({
        status: true,
        id: parseInt(id),
        message: "Task deleted by Id"
    });
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,
}