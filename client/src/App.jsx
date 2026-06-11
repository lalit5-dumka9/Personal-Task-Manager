import { useEffect, useState } from "react";

import API from "./services/api";

import TaskForm from "./components/TaskForm";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Stats from "./components/Stats";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [filter, setFilter] = useState("all");

  const [editingTask, setEditingTask] = useState(null);

  // Fetch Tasks
  const fetchTasks = async () => {
    try {
      const response = await API.get("/");

      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add Task
  const addTask = async (taskData) => {
    try {
      const response = await API.post("/", taskData);

      setTasks((prevTasks) => [
        response.data,
        ...prevTasks,
      ]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Update Task
  const updateTask = async (id, updatedTask) => {
    try {
      const response = await API.put(
        `/${id}`,
        updatedTask
      );

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id
            ? response.data
            : task
        )
      );

      setEditingTask(null);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Toggle Complete
  const toggleTask = async (id) => {
    try {
      const response = await API.patch(
        `/${id}/toggle`
      );

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id
            ? response.data
            : task
        )
      );
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    try {
      await API.delete(`/${id}`);

      setTasks((prevTasks) =>
        prevTasks.filter(
          (task) => task.id !== id
        )
      );

      if (
        editingTask &&
        editingTask.id === id
      ) {
        setEditingTask(null);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Filter + Search Tasks
  const filteredTasks = tasks.filter(
    (task) => {
      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      let matchesFilter = true;

      if (filter === "active") {
        matchesFilter =
          !task.completed;
      }

      if (filter === "completed") {
        matchesFilter =
          task.completed;
      }

      return (
        matchesSearch &&
        matchesFilter
      );
    }
  );

  return (
    <div className="container">

      <header className="header">
        <div>
          <h1>
            Personal Task Manager
          </h1>

          <p>
            Organize your work and
            life efficiently.
          </p>
        </div>
      </header>

      <Stats tasks={tasks} />

      <TaskForm
        onAddTask={addTask}
        editingTask={editingTask}
        onUpdateTask={updateTask}
      />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={
          setSearchTerm
        }
      />

      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={setEditingTask}
      />

    </div>
  );
}

export default App;