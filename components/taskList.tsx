import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";
import { addTask } from "../store/slices/taskSlice";
import TaskItem from "./taskItem";

export const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const [newTask, setNewTask] = useState("");
  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: crypto.randomUUID(),
      title: newTask,
      isDone: false,
    };

    dispatch(addTask(task));
    setNewTask("");
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem id={task.id} title={task.title} isDone={task.isDone} />
          </li>
        ))}
      </ul>
    </div>
  );
};
