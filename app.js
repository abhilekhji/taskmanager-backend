const express = require("express");

const app = express();

// Create Routes
app.post('/createTask',(req,res)=>{
    res.json({
        status: true,
        message: "New Task created"
    });
});

// Read Routes
app.get('/getAllTasks',(req,res)=>{
    res.json({
        status: true,
        message: "Get all tasks"
    })
});

app.get('/getTaskById/:id',(req,res)=>{
    const { id } = req.params;
    res.json({
        status: true,
        id: parseInt(id),
        message: "Get task by id"
    });
});

// Update Routes
app.put('/updateTaskById/:id',(req,res)=>{
    const { id } = req.params;
    res.json({
        status: true,
        id: parseInt(id),
        message: "Update task by Id"
    });
});

// Delete Routes
app.delete('/deleteTaskById/:id',(req,res)=>{
    const { id } = req.params;
    res.json({
        status: true,
        id: parseInt(id),
        message: "Task deleted by Id"
    });
});

const port = 3000;
app.listen(port, console.log(`The app is listening to port ${port}...`));