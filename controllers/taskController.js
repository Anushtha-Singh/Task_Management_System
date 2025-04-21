const Task = require('../models/Task');

const getTasks = async (req, res) => {
        const { status, page = 1, limit = 5 } = req.query;
        const query = status ? { status } : {};
        const tasks = await Task.find(query).skip((page - 1) * limit).limit(parseInt(limit));
        const total = await Task.countDocuments(query);
        
        res.json({
            total,
            page: parseInt(page),
            limit: parseInt(limit),
            tasks
        });
};

const createTask = async (req, res) => {
    const {title} = req.body;
    const task = new Task({title});
    await task.save();
    res.status(201).json(task);
};

const getTaskByID = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    if(!task) {
        return res.status(404).json({ error: 'Task not Found'});
    }
    res.json(task);
};

const updateTask = async (req, res) => {
       const { id } = req.params;
       const updatedTask = await Task.findByIdAndUpdate(id, req.body, {new: true});
       if(!updatedTask) {
        res.status(404).json({message: 'Task not Found'});
       }
       res.json({message : 'Task Updated Successfully'});
};

const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) return res.status(404).json({error: 'Task not fount'});
    res.json({message : 'Task deleted Successfully'});
};

module.exports = { 
    getTasks,
    createTask,
    getTaskByID,
    updateTask, 
    deleteTask,
};