import Task from "../models/Task.js";

export const getAllTasks = async(req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);

    } catch (error) {
         console.error("Error fetching tasks:", error);
         res.status(500).json({message: "Lỗi khi lấy danh sách nhiệm vụ"});
    }
}

export const createTask = (req, res) => {
    res.status(201).json({message: "Nhiệm vụ mới được thêm vào thành công"});
}

export const updateTask = (req, res) => {
    res.status(200).json({message: "Nhiệm vụ đã được cập nhật thành công"});
}

export const deleteTask = (req, res) => {
    res.status(200).json({message: "Nhiệm vụ đã được xóa thành công"});
}