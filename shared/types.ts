import rootReducer from "../store/rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

export type Task = {
  id: string;
  title: string;
  isDone: boolean;
};
export type TaskState = {
  tasks: Task[];
};
