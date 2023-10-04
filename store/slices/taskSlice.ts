import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, TaskState } from "../../shared/types";

type UpdateTaskPayload = Pick<Task, "id" | "title">;

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    initializeTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      sessionStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTask: (state, action: PayloadAction<UpdateTaskPayload>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );
      if (index !== -1) {
        state.tasks[index].title = action.payload.title;
        sessionStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    toggleTaskDone: (state, action: PayloadAction<string>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks[index].isDone = !state.tasks[index].isDone;
        sessionStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks.splice(index, 1);
        sessionStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
});

export const {
  addTask,
  updateTask,
  toggleTaskDone,
  removeTask,
  initializeTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
