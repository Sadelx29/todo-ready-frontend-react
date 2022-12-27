import { useEffect } from "react";
import TaskCard from "../Components/TaskCard";
import { useTask } from "../context/TaskProvider";

const TasksPages = () => {
  const { task, loadTasks } = useTask();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (task.length === 0) {
      return <h1> no task yet</h1>;
    }
    return task.map((task) => <TaskCard task={task} key={task.id} />);
  }
  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
      <div className="grid  grid-cols-3 gap-2 pt-5">{renderMain()}</div>
    </div>
  );
};

export default TasksPages;
