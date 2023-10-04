import { useRouter } from "next/router";
import { TasksList } from "../components/taskList";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const TasksPage = () => {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  return (
    <TasksPageContainer>
      <TasksList />
    </TasksPageContainer>
  );
};

export default TasksPage;

const TasksPageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  width: 100%;
  margin-top: 5rem;
`;
