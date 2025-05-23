const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('Task Manager API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on localhost  : ${PORT}`);
});

const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

