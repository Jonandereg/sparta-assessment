import tasksReducer, {
  addTask,
  updateTask,
  removeTask,
  TaskState,
} from "../taskSlice";

// Mock sessionStorage
global.sessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  length: 0,
  key: jest.fn(),
};

describe("tasks reducer", () => {
  const initialState: TaskState = {
    tasks: [],
  };

  it("should handle initial state", () => {
    expect(tasksReducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle addTask", () => {
    const task = { id: "1", title: "Test Task", isDone: false };
    expect(tasksReducer(initialState, addTask(task))).toEqual({
      tasks: [task],
    });
  });

  it("should handle updateTask", () => {
    const initial = {
      tasks: [{ id: "1", title: "Test Task", isDone: false }],
    };
    const updatedTask = { id: "1", title: "Updated Task" };
    expect(tasksReducer(initial, updateTask(updatedTask))).toEqual({
      tasks: [{ id: "1", title: "Updated Task", isDone: false }],
    });
  });

  it("should handle deleteTask", () => {
    const initial = {
      tasks: [{ id: "1", title: "Test Task", isDone: false }],
    };
    expect(tasksReducer(initial, removeTask("1"))).toEqual({ tasks: [] });
  });
});
