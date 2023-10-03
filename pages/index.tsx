import { useRouter } from "next/router";
import { TasksList } from "../components/taskList";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";

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
    <div>
      <TasksList />
    </div>
  );
};

export default TasksPage;
