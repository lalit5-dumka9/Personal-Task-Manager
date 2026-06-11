const { v4: uuidv4 } = require("uuid");

const {
  readTasks,
  writeTasks
} = require("../utils/fileHandler");

const getTasks = (req, res) => {
  try {
    const tasks = readTasks();

    tasks.sort(
      (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
    );

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tasks"
    });
  }
};

const createTask = (req, res) => {
  try {
    const {
      title,
      description,
      dueDate
    } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        message: "Title is required"
      });
    }

    const tasks = readTasks();

    const newTask = {
      id: uuidv4(),
      title: title.trim(),
      description: description || "",
      dueDate: dueDate || "",
      completed: false,
      createdAt: new Date().toISOString()
    };

    tasks.push(newTask);

    writeTasks(tasks);

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create task"
    });
  }
};

const updateTask = (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      dueDate
    } = req.body;

    const tasks = readTasks();

    const taskIndex = tasks.findIndex(
      task => task.id === id
    );

    if (taskIndex === -1) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      title,
      description,
      dueDate
    };

    writeTasks(tasks);

    res.json(tasks[taskIndex]);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update task"
    });
  }
};

const toggleTask = (req, res) => {
  try {
    const { id } = req.params;

    const tasks = readTasks();

    const task = tasks.find(
      task => task.id === id
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    task.completed = !task.completed;

    writeTasks(tasks);

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update status"
    });
  }
};

const deleteTask = (req, res) => {
  try {
    const { id } = req.params;

    const tasks = readTasks();

    const updatedTasks = tasks.filter(
      task => task.id !== id
    );

    if (
      updatedTasks.length === tasks.length
    ) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    writeTasks(updatedTasks);

    res.json({
      message: "Task deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete task"
    });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  toggleTask,
  deleteTask
};