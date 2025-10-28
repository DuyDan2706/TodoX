import express from 'express';
import taskRoutes from './routes/TaskRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();


// Middleware muốn đi qua phải qua đây kiểm tra json >>> object 
app.use(express.json());

app.use('/api/tasks', taskRoutes);


connectDB().then(()=>{
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
})



