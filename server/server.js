const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

const PORT = 5000;

app.use(
  cors({
    origin:
      "https://personal-task-manager-lalit5-dumka9s-projects.vercel.app/",
  })
);

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Task Manager API Running"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});