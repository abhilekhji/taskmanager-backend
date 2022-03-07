const connectDb = require('./db/connect');
const Task = require('./models/taskManager');
const express = require("express");
require('dotenv').config();

const app = express();
const tasks = require('./routes/task');

app.use(express.static('./public'));
app.use(express.json())

app.use((req, res, next) => {
    let origin;
    let ALLOWED_ORIGINS = process.env.CORS_ALLOW_ORIGINS.split(",");
    if (ALLOWED_ORIGINS.length > 0) {
      origin = ALLOWED_ORIGINS.indexOf(req.header('origin') && req.header('origin').toLowerCase()) > -1 ? req.headers.origin : ALLOWED_ORIGINS[0];
      res.header("Access-Control-Allow-Origin", origin);
      res.header("Vary","Origin");
      res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE, OPTIONS");
      res.header("Access-Control-Allow-Credentials", true);
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization, XSRF-TOKEN");
      if (req.method === "OPTIONS") {
        return res.status(200).json({});
  
      } else {
        next();
      }
    } else {
      logger("init", "CORS Error", "CORS allowed origins not found");
      return res.status(400).json({});
    }
})

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