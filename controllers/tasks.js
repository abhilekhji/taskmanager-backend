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
    }
}
getTaskById = async (req,res)=>{
    const { id } = req.params;
    try {
        const task = await Task.findOne({_id: id});
        return res.status(201).json({
            status: true,
            data: task
        });
    } catch(err) {
        res.status(500).json({
            status: false,
            message: err
        });
    }
}
updateTaskById = async (req,res)=>{
    const { id } = req.params;
    const body = req.body;
    try {
        const task = await Task.findOneAndUpdate({_id: id}, body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: true,
            data: task
        });
    } catch(err) {
        res.status(500).json({
            status: false,
            message: err
        });
    }
}
deleteTaskById = async (req,res)=>{
    const { id } = req.params;
    try {
        const task = await Task.findOneAndDelete({_id: id});
        res.status(201).json({
            status: true,
            data: task
        });
    } catch(err) {
        res.status(500).json({
            status: false,
            message: err
        });
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,
}