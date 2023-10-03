import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";
import { addTask } from "../store/slices/taskSlice";
import TaskItem from "./taskItem";
import { Box, TextField, styled } from "@mui/material";
import { PrimaryButton } from "./buttons";

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
    <TaskListContainer>
      <h1>Task List</h1>
      <InputContainer>
        <TextField
          variant="standard"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <PrimaryButton onClick={handleAddTask}>Add Task</PrimaryButton>
      </InputContainer>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem id={task.id} title={task.title} isDone={task.isDone} />
          </li>
        ))}
      </ul>
    </TaskListContainer>
  );
};

const InputContainer = styled(Box)`
  display: flex;
  grid-gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;
const TaskListContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  margin-bottom: 1rem;
`;
