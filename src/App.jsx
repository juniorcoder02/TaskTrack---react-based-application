import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const taskString = localStorage.getItem("tasks");
    if (taskString) {
      try {
        const savedTasks = JSON.parse(taskString);
        if (Array.isArray(savedTasks)) {
          setTasks(savedTasks);
        } else {
          console.error("Invalid data in localStorage. Resetting tasks.");
          localStorage.removeItem("tasks");
        }
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        localStorage.removeItem("tasks");
      }
    }
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setTask(taskToEdit.task);
      setTasks(tasks.filter((item) => item.id !== id));
    }
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: uuidv4(), task, isCompleted: false }]);
      setTask("");
    }
  };

  const handleCheckbox = (id) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-gray-100 shadow-lg min-h-[80vh]">
        <div className="addTask my-5">
          <h1 className="text-3xl font-extrabold text-blue-600 mb-4">Task Manager</h1>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <input
              onChange={(e) => setTask(e.target.value)}
              value={task}
              type="text"
              placeholder="Enter your task"
              className="flex-grow p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleAdd}
              disabled={task.length < 3}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold transition disabled:bg-gray-300"
            >
              Add Task
            </button>
          </div>
        </div>

        <div className="my-5 flex items-center gap-3">
          <input
            onChange={toggleFinished}
            type="checkbox"
            checked={showFinished}
            className="w-5 h-5"
          />
          <span className="text-lg text-gray-700">Show Finished Tasks</span>
        </div>

        <h2 className="font-extrabold text-2xl text-blue-700 mb-4">Your Tasks</h2>
        <div className="tasks mt-5">
          {tasks.length === 0 ? (
            <div className="text-center text-gray-500">No tasks to display</div>
          ) : (
            tasks.map((item) => (
              (showFinished || !item.isCompleted) && (
                <div
                  className="task flex flex-col md:flex-row justify-between items-center my-3 bg-white p-4 rounded-md shadow-md"
                  key={item.id}
                >
                  <div className="flex items-center gap-4">
                    <input
                      onChange={() => handleCheckbox(item.id)}
                      type="checkbox"
                      checked={item.isCompleted}
                      className="w-5 h-5"
                    />
                    <div
                      className={`text-lg font-medium ${
                        item.isCompleted ? "line-through text-gray-400" : "text-gray-800"
                      }`}
                    >
                      {item.task}
                    </div>
                  </div>
                  <div className="buttons flex gap-2 mt-3 md:mt-0">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-2 rounded-md font-semibold transition"
                    >
                      <MdModeEditOutline /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md font-semibold transition"
                    >
                      <MdDelete /> Delete
                    </button>
                  </div>
                </div>
              )
            ))
          )}
        </div>

        {tasks.length > 0 && (
          <button
            onClick={() => {
              setTasks([]);
              localStorage.removeItem("tasks");
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold mt-5 transition"
          >
            Clear All Tasks
          </button>
        )}
      </div>
    </>
  );
}

export default App;