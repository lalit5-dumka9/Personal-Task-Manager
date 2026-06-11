import React from "react";

function TaskCard({
  task,
  onToggle,
  onDelete,
  onEdit,
}) {
  const isOverdue =
    task.dueDate &&
    !task.completed &&
    new Date(task.dueDate) < new Date();

  return (
    <div
      className={`task-card ${
        task.completed
          ? "completed-task"
          : ""
      } ${
        isOverdue
          ? "overdue-task"
          : ""
      }`}
    >
      <div className="task-top">

        <div className="task-checkbox">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() =>
              onToggle(task.id)
            }
          />
        </div>

        <div className="task-content">

          <h3
            className={`task-title ${
              task.completed
                ? "completed-text"
                : ""
            }`}
          >
            {task.title}
          </h3>

          {task.description && (
            <p className="task-description">
              {task.description}
            </p>
          )}

          <div className="task-meta">

            {task.dueDate && (
              <span
                className={`due-date ${
                  isOverdue
                    ? "overdue-label"
                    : ""
                }`}
              >
                📅 Due: {task.dueDate}
              </span>
            )}

            <span
              className={`status-badge ${
                task.completed
                  ? "status-completed"
                  : "status-active"
              }`}
            >
              {task.completed
                ? "Completed"
                : "Active"}
            </span>

          </div>

        </div>

      </div>

      <div className="task-actions">

        <button
          className="edit-btn"
          onClick={() =>
            onEdit(task)
          }
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => {
            const confirmDelete =
              window.confirm(
                "Are you sure you want to delete this task?"
              );

            if (confirmDelete) {
              onDelete(task.id);
            }
          }}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;