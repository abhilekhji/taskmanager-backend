const express = require("express");
const router = express.Router();
const tasksController = require('../controllers/tasks');

router.route('/createTask').post(tasksController.createTask);
router.route('/getAllTasks').get(tasksController.getAllTasks);
router.route('/getTaskById/:id').get(tasksController.getTaskById);
router.route('/updateTaskById/:id').put(tasksController.updateTaskById);
router.route('/deleteTaskById/:id').delete(tasksController.deleteTaskById);

module.exports = router;