import Task from "../models/Task.js";

// get all
export const getAllTasks = async(req, res) => {
    try {
        const tasks = (await Task.find());
        res.status(200).json(tasks);

    } catch (error) {
         console.error("Error fetching tasks:", error);
         res.status(500).json({message: "Lỗi khi lấy danh sách nhiệm vụ"});
    }
}
// tạo task
export const createTask =  async (req, res) => {
    try {
     const { title } = req.body;
    const task = new Task({ title });
    const newTask = await task.save();
    console.log("newTask:", newTask);
    res.status(201).json(newTask);

    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({message: "Lỗi khi tạo nhiệm vụ"});
    }
}

export const updateTask = async (req, res) => {
    try {
        const {title,status, complateAt}   = req.body; 
        const UpdatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title,
                status,
                complateAt
            },
            {
                new: true  // ko có là trả về giá trị khi update 
            }
   
        ) 
        // kiểm tra có tồn tại không
        if (!UpdatedTask) {
            return res.status(404).json({message: "Nhiệm vụ không tồn tại"});
        }
        res.status(200).json(UpdatedTask); // update thành công 200
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({message: "Lỗi khi cập nhật nhiệm vụ"});
    }
}

export const deleteTask = async (req, res) => {
 try {
const deletedTask = await Task.findByIdAndDelete(req.params.id);

if (!deletedTask) {
    return res.status(404).json({message: "Nhiệm vụ không tồn tại"});
}

  res.status(200).json(deletedTask);

 } catch (error) {
      console.error("Error deleting task:", error);
        res.status(500).json({message: "Lỗi khi xóa nhiệm vụ"});
 }
}