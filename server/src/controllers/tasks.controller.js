const taskController = {};

const Task = require('../models/Task');


taskController.getTasks = async (req,res)=>{
    const tasks = await Task.find();
    res.json(tasks)
}

taskController.getTask = async (req,res)=>{
    const task = await Task.findById(req.params.id);
    console.log(task)
    res.send(task)
}

taskController.createTask = async (req,res)=>{
    console.log(req.body)
    const newTask = new Task(req.body)
    await newTask.save()
    res.send({message: 'Create success'})
}

taskController.updateTask = async (req,res)=>{
    await Task.findByIdAndUpdate(req.params.id,req.body)
    res.send({message:'Update success'})
}

taskController.deleteTask = async (req,res)=>{
    await Task.findByIdAndDelete(req.params.id)
    res.send({message:'Delete success'})
}

module.exports = taskController;