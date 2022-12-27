import { useTask } from "../context/TaskProvider";
import { Navigate, useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { DeleteTask, ToggleTask } = useTask();
  const navigate = useNavigate();

  const handleDone = async () => {
    await ToggleTask(task.id);
  };

  return (
    <div className="bg-slate-300 rounded-md p-4">
      <header className="flex justify-between ">
        <h2 className="text-xl font-bold">{task.title}</h2>
        <span>{task.done === 1 ? "✔️ " : "❌"}</span>
      </header>

      <p className="text-xs">{task.description}</p>

      <span>{task.createAT}</span>
      <div className="flex gap-x-2 rounded-md">
        <button
          className="bg-red-500 px-2 py-1 text-white rounded-md"
          onClick={() => DeleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-gray-500 px-2 py-1 text-white rounded-md"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-green-500 px-2 py-1 text-white rounded-md"
          onClick={() => handleDone(task.done)}
        >
          Toggle Task
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
