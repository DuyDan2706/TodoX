import express from 'express';
import taskRoutes from './routes/TaskRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
connectDB();

app.use('/api/task', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
