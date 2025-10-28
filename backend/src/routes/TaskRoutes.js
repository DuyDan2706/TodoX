import express from 'express';
import { deleteTask, getAllTasks, updateTask } from '../controllers/taskController.js';
import { createTask } from '../controllers/taskController.js';
const router = express.Router();

const app = express();
router.get("/", getAllTasks);

router.post("/",createTask);

router.put("/:id",updateTask);

router.delete("/:id",deleteTask);
export default router;