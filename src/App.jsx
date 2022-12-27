import { Route, Routes } from "react-router-dom";
import "./App.css";
import TasksPages from "./pages/TasksPages";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import Navbar from "./Components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider";

function App() {
  return (
    <>
      <div className="bg-zinc-800 h-screen">
        <Navbar />
        <div className="container mx-auto py-4 px-10">
          <TaskContextProvider>
            <Routes>
              <Route path="/" element={<TasksPages />} />
              <Route path="/new" element={<TaskForm />} />
              <Route path="/edit/:id" element={<TaskForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TaskContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
