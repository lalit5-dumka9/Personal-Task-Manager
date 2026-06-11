import React from "react";
import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  onToggle,
  onDelete,
  onEdit,
}) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          📝
        </div>

        <h2>No Tasks Found</h2>

        <p>
          You don't have any tasks
          matching the current filter.
        </p>

        <span>
          Start by creating a new
          task above.
        </span>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;