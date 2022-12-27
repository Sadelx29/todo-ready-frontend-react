import { Form, Formik } from "formik";
import { useTask } from "../context/TaskProvider";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { CreateTask, GetTask, UpdateTask } = useTask();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const loadTasks = async () => {
      if (params.id) {
        const task = await GetTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
        console.log(task);
      }
    };
    loadTasks();
  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await UpdateTask(params.id, values);
          
          } else {
            await CreateTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-gray-700 max-w-md rounded-md p-4 mx-auto"
          >
            <h1 className="text-xl font-bold uppercase text-center text-white">
              {params.id ? "Edit Task" : "Create Task"}
            </h1>
            <label className="block text-xl  text-white uppercase">Title</label>
            <input
              className="px-2 py-1 rounded-md w-full"
              type="text"
              name="title"
              onChange={handleChange}
              value={values.title}
            ></input>

            <label className="block text-white text-xl uppercase" >Description</label>
            <textarea
              className="px-2 py-1 rounded-md w-full"
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "saving..." : "save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
