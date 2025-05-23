# Task Manager 

A simple Task Management REST API built using Node.js, Express.js, and MongoDB. This API allows users to create, read, update, and delete tasks. Additionally, it supports filtering tasks by status and paginating the task list.

### Testing Part is being done using Postman and All the ```Screenshots``` are inside Screenshot folder and complete work-flow screenshots are in ```Task Management System.Pdf```

## Features

- Create a new task
- Fetch all tasks
- Get task by ID
- Update task
- Delete task
- Filter tasks by status (`pending`, `in-progress`, `completed`)
- Paginate the task list using `page` and `limit` query parameters

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## API Endpoints

### Create Task
`POST /api/tasks`

Request Body:
```json
{
    "title": "Make Task Management Project",
    "status": "in-progress",
    "description": "Backend Project"
}
```
## Use this

## How to Use This Project

Follow these steps to run the Task Manager API on your local machine:

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Anushtha-Singh/task_management_system.git
```
### 2. Install Dependencies
Navigate to the project folder and install the necessary dependencies:

```
    cd Task_Manangement_System
    npm install
```

### 3. Set Up Environment Variables
Update a .env file in the root of your project and add your MongoDB URI:
```
MONGO_URI=your_mongodb_connection_string
```
### 4. Start the Server
Once all dependencies are installed, you can start the server with the following command:
```
node index.js
This will start the server on http://localhost:5000.
```
### 5. Using the API
You can interact with the API by sending HTTP requests to the following endpoints:

#### 5.1 Create a Task
```POST /api/tasks```

Request body:
{
            "title": "Make Task Management Project",
            "description": "Backend Project",
            "status": "in-progess",
}
#### 5.2 Get All Tasks
```GET /api/tasks```

Query parameters:

**status**: Filter tasks by status (pending, in-progress, completed).

**page**: Page number (default is 1).

**limit**: Number of tasks per page (default is 10).

#### 5.3 Get Task by ID
```GET /api/tasks/:id```

####  5.4 Update a Task
```PUT /api/tasks/:id```

Request body:
```json
{
  "title": "Make Task Management Project",
  "status": "completed",
  "description": "Backend Project"
}
```
#### 5.5 Delete a Task
```DELETE /api/tasks/:id```

### 6. Test the API with Postman
To test the API, you can use Postman or any API client. Here’s how to make requests with Postman:

For POST and PUT requests, include the necessary JSON body.

POST: POST Update: PUT ```http://localhost:3000/api/tasks```

Update: PUT ```http://localhost:3000/api/tasks/<id>```

For GET requests, use query parameters as

GET: GET```http://localhost:3000/api/tasks```

delete:  DELETE ```http://localhost:3000/api/tasks/<id>```

filter: GET ```http://localhost:3000/api/tasks?status=pending``` 

paginate: GET ```http://localhost:3000/api/tasks?pafe=2&limit=2``` 
