import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleTaskDone,
  removeTask,
  updateTask,
} from "../store/slices/taskSlice";

type TaskItemProps = {
  id: string;
  title: string;
  isDone: boolean;
};

const TaskItem: React.FC<TaskItemProps> = ({ id, title, isDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();

  const handleToggleDone = () => {
    dispatch(toggleTaskDone(id));
  };

  const handleRemove = () => {
    dispatch(removeTask(id));
  };

  const handleUpdate = () => {
    dispatch(updateTask({ id, title: newTitle }));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleUpdate}
        />
      ) : (
        <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
          {title}
        </span>
      )}
      <button onClick={handleToggleDone}>{isDone ? "Undo" : "Done"}</button>
      <button onClick={() => setIsEditing((prev) => !prev)}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default TaskItem;
