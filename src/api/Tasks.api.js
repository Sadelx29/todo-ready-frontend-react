import axios from "axios";

export const getTasksRequest = async () =>
  await axios.get("http://localhost:5000/tasks/");

export const CreateTaskRequest = async (task) =>
  await axios.post("http://localhost:5000/tasks/", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:5000/tasks/${id}/`);

export const getOneTask = async (id) =>
  await axios.get(`http://localhost:5000/tasks/${id}/`);

export const UpdateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:5000/tasks/${id}/`, newFields);

export const ToggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:5000/tasks/${id}/`, {
    done
  });
