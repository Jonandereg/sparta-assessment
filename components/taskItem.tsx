import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleTaskDone,
  removeTask,
  updateTask,
} from "../store/slices/taskSlice";
import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { CustomButton } from "./buttons";

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
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleUpdate}
          />
        ) : (
          <ItemTitle className={isDone ? "done" : ""}>{title}</ItemTitle>
        )}
      </TextContainer>
      <ButtonsContainer>
        <CustomButton onClick={handleToggleDone} size="small">
          {isDone ? "Undo" : "Done"}
        </CustomButton>
        <CustomButton
          onClick={() => setIsEditing((prev) => !prev)}
          size="small"
        >
          {isEditing ? "Save" : "Edit"}
        </CustomButton>
        <CustomButton className="secondary" onClick={handleRemove} size="small">
          Remove
        </CustomButton>
      </ButtonsContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  min-width: 500px;
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

const ItemTitle = styled(Typography)`
  &.done {
    text-decoration: line-through;
  }
`;

export default TaskItem;
