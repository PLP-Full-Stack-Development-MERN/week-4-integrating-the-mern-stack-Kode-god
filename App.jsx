import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css"; 

function App () {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch all tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get("https://task-manager-6wff.onrender.com/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Add or update a task
  const handleSubmit = async (task) => {
    try {
      if (editingTask) {
        // Update task
        await axios.put(`https://task-manager-6wff.onrender.com/api/tasks/${editingTask._id}`, task);
      } else {
        // Add new task
        await axios.post("https://task-manager-6wff.onrender.com/api/tasks", task);
      }
      fetchTasks(); // Refresh the task list
      setEditingTask(null); // Clear the editing state  remove later
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  // Delete a task
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://task-manager-6wff.onrender.com/api/tasks/${id}`);
      fetchTasks(); // Refresh the task list
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Set the task to be edited
  const handleEdit = (task) => {
    setEditingTask(task);
  };

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">Task Manager</h1>
      <TaskForm onSubmit={handleSubmit} task={editingTask} />
      <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
