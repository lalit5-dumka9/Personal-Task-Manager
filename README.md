# Personal Task Manager

A full-stack Personal Task Manager application built using React and Node.js. This application allows users to create, update, delete, search, and manage their daily tasks efficiently. The project was developed as part of the Studio Graphene Full Stack Developer assessment.

## Features

### Must Have Features

* Add a new task with:

  * Title (required)
  * Description (optional)
  * Due Date (optional)
* View all tasks sorted by newest first
* Mark tasks as complete or incomplete
* Edit existing tasks
* Delete tasks with confirmation prompt
* Filter tasks by:

  * All
  * Active
  * Completed

### Should Have Features

* Display active vs completed task counts
* Highlight overdue tasks visually
* Empty state UI when no tasks exist

### Nice to Have Features

* Search tasks by title
* Persist tasks using JSON file storage

---

## Tech Stack

### Frontend

* React
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js
* UUID
* CORS

### Storage

* JSON File Persistence

---

## Project Structure

```
personal-task-manager/

├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FilterBar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── utils/
│   │   └── fileHandler.js
│   │
│   ├── data/
│   │   └── tasks.json
│   │
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

## How to Run Locally

### Clone Repository

```bash
git clone <repository-url>

cd personal-task-manager
```

---

### Backend Setup

```bash
cd server

npm install

npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend Setup

Open another terminal:

```bash
cd client

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## API Documentation

### Get All Tasks

```
GET /api/tasks
```

Response:

```json
[
  {
    "id": "123",
    "title": "Learn React",
    "description": "Practice hooks",
    "dueDate": "2026-06-15",
    "completed": false,
    "createdAt": "2026-06-10T08:00:00Z"
  }
]
```

---

### Create Task

```
POST /api/tasks
```

Request Body:

```json
{
  "title": "Build Project",
  "description": "Finish assignment",
  "dueDate": "2026-06-15"
}
```

---

### Update Task

```
PUT /api/tasks/:id
```

Request Body:

```json
{
  "title": "Updated Task",
  "description": "Updated Description",
  "dueDate": "2026-06-18"
}
```

---

### Toggle Task Status

```
PATCH /api/tasks/:id/toggle
```

---

### Delete Task

```
DELETE /api/tasks/:id
```

---

## Design Decisions

* JSON file storage was chosen because the assessment explicitly allowed it and it keeps the project lightweight.
* React functional components with hooks were used for simplicity and modern React practices.
* Express was used to build a clean REST API.
* Component-based architecture was followed to improve maintainability and readability.

---

## Future Improvements

Given more time, I would implement:

* Drag and Drop task reordering
* Automated testing using Jest and React Testing Library
* User authentication
* SQLite or PostgreSQL integration
* Dark Mode support
* Toast notifications for user actions

---

## Known Limitations

* Data persistence is limited to a local JSON file.
* Single-user application with no authentication.
* No automated tests included in this version.

---

## Author

Lalit Dumka

B.Tech Computer Science Graduate

Thank you for reviewing this submission.
