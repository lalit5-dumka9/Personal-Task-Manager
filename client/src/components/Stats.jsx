function Stats({ tasks }) {
  const activeTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const totalTasks = tasks.length;

  return (
    <div className="stats-container">
      <div className="stat-card">
        <h2>{totalTasks}</h2>
        <p>Total Tasks</p>
      </div>

      <div className="stat-card">
        <h2>{activeTasks}</h2>
        <p>Active Tasks</p>
      </div>

      <div className="stat-card">
        <h2>{completedTasks}</h2>
        <p>Completed Tasks</p>
      </div>
    </div>
  );
}

export default Stats;