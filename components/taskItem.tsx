import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleTaskDone,
  removeTask,
  updateTask,
} from "../store/slices/taskSlice";
import { Box, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { PrimaryButton, SecondaryButton } from "./buttons";

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
    <ItemContainer>
      <TextContainer>
        {isEditing ? (
          <TextField
            variant="standard"
            fullWidth
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleUpdate}
          />
        ) : (
          <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
            {title}
          </span>
        )}
      </TextContainer>
      <ButtonsContainer>
        <PrimaryButton onClick={handleToggleDone}>
          {isDone ? "Undo" : "Done"}
        </PrimaryButton>
        <PrimaryButton onClick={() => setIsEditing((prev) => !prev)}>
          {isEditing ? "Cancel" : "Edit"}
        </PrimaryButton>
        <SecondaryButton onClick={handleRemove}>Remove</SecondaryButton>
      </ButtonsContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  max-width: 800px;
`;

const ButtonsContainer = styled(Box)`
  display: flex;
  margin-left: auto;
  grid-gap: 8px;
  padding-right: 1.5rem;
`;

const TextContainer = styled(Box)`
  flex: 1;
  height: 30px;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  display: flex;
`;

export default TaskItem;
