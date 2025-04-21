const express = require('express');
const router = express.Router();
const { 
    getTasks,
    createTask,
    getTaskByID,
    updateTask,
    deleteTask
} = require('../controllers/taskController');


router.get('/', getTasks);
router.post('/', createTask);
router.get('/:id', getTaskByID);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
module.exports = router;