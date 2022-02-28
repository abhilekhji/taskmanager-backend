const connectDb = require('./db/connect');
const Task = require('./models/taskManager');
const express = require("express");
require('dotenv').config();

const app = express();
const tasks = require('./routes/task');

app.use(express.static('./public'));
app.use(express.json())
app.use('/api/tasks',tasks);

const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDb(process.env.MONGO_CONNECTION)
        app.listen(port, console.log(`The app is listening to port ${port}...`));   
    } catch(error) {
        console.log("Unable to connect DB : ", error);
    }
}

start();