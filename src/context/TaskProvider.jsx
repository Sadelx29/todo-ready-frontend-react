import { useContext, useState } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  CreateTaskRequest,
  // getTaskRequest,
  getOneTask,
  UpdateTaskRequest,
  ToggleTaskDoneRequest,
} from "../api/tasks.api";
import { TaskContext } from "./TaskContext";

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used whitin a TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState([]);

  async function loadTasks() {
    const Gtasks = await getTasksRequest();
    console.log(Gtasks.data);
    setTask(Gtasks.data);
  }

  const CreateTask = async (task) => {
    try {
      const tasks = await CreateTaskRequest(task);
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteTask = async (id) => {
    try {
      const Dtask = await deleteTaskRequest(id);
      setTask(task.filter((task) => task.id !== id));
      console.log(Dtask);
    } catch (error) {
      console.log(error);
    }
  };

  const GetTask = async (id) => {
    try {
      const Etask = await getOneTask(id);
      return Etask.data;
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateTask = async (id, newFields) => {
    try {
      const Utask = await UpdateTaskRequest(id, newFields);
      console.log(Utask);
    } catch (error) {
      console.log(error);
    }
  };

  const ToggleTask = async (id) => {
    try {
      const taskFound = task.find((task) => task.id === id);
      await ToggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);
      
      setTask(task.map((task) => (task.id === id ? { ...task, task: !task.done } : task)))
      loadTasks()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        loadTasks,
        DeleteTask,
        CreateTask,
        GetTask,
        UpdateTask,
        ToggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
