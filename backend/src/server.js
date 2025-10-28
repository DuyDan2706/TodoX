import express from 'express';
import taskRoutes from './routes/TaskRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import serverless from 'serverless-http';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/tasks', taskRoutes);

await connectDB();

const isServerless = !!process.env.VERCEL || !!process.env.AWS_LAMBDA_FUNCTION_NAME;

// Khai báo trước handler
let handler;

if (isServerless) {
  console.log('Running in serverless environment');
  handler = serverless(app);
} else {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => console.log(`Server running locally on port ${PORT}`));
}

// Export mặc định
export { handler };
export default app;
