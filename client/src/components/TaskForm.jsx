import { useEffect, useState } from "react";


function TaskForm({
  onAddTask,
  editingTask,
  onUpdateTask,
}) {
  const [title, setTitle] = useState("");

  const [description, setDescription] =
    useState("");

  const [dueDate, setDueDate] =
    useState("");

  // Fill form when editing
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);

      setDescription(
        editingTask.description || ""
      );

      setDueDate(
        editingTask.dueDate || ""
      );
    } else {
      resetForm();
    }
  }, [editingTask]);

  const resetForm = () => {
    setTitle("");

    setDescription("");

    setDueDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert(
        "Task title is required"
      );

      return;
    }

    const taskData = {
      title: title.trim(),

      description:
        description.trim(),

      dueDate,
    };

    if (editingTask) {
      onUpdateTask(
        editingTask.id,
        taskData
      );
    } else {
      onAddTask(taskData);
    }

    resetForm();
  };

  const handleCancelEdit = () => {
    resetForm();

    window.location.reload();
  };

  return (
    <div className="task-form-card">

      <div className="form-header">
        <h2>
          {editingTask
            ? "Edit Task"
            : "Add New Task"}
        </h2>

        <p>
          {editingTask
            ? "Update your task details"
            : "Create and organize your tasks"}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="task-form"
      >

        <div className="form-group">

          <label>
            Task Title
          </label>

          <input
            type="text"
            placeholder="Enter task title..."
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            className="input-field"
          />

        </div>

        <div className="form-group">

          <label>
            Description
          </label>

          <textarea
            placeholder="Add task description (optional)..."
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="textarea-field"
            rows="4"
          />

        </div>

        <div className="form-group">

          <label>
            Due Date
          </label>

          <input
            type="date"
            value={dueDate}
            onChange={(e) =>
              setDueDate(
                e.target.value
              )
            }
            className="input-field"
          />

        </div>

        <div className="form-buttons">

          <button
            type="submit"
            className="primary-btn"
          >
            {editingTask
              ? "Update Task"
              : "Add Task"}
          </button>

          {editingTask && (
            <button
              type="button"
              className="secondary-btn"
              onClick={
                handleCancelEdit
              }
            >
              Cancel
            </button>
          )}

        </div>

      </form>

    </div>
  );
}

export default TaskForm;