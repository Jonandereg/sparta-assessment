import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";
import { addTask } from "../store/slices/taskSlice";
import TaskItem from "./taskItem";
import { Box, TextField, Typography, styled } from "@mui/material";
import { CustomButton } from "./buttons";

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
      <Typography variant="h4" align="center">
        Task List
      </Typography>
      <InputContainer>
        <TextField
          data-testid="newTask"
          variant="standard"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <CustomButton data-testid="addTask" onClick={handleAddTask}>
          Add Task
        </CustomButton>
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
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 0 4px 0 #ccc;
  align-items: center;
`;
