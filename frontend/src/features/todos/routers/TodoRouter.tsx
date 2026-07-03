import { NAVIGATION_LIST } from "../../../shared/constants/navigation";
import { Routes, Route } from "react-router";
import { TodoListPage } from "../../../pages";

export const TodoRouter = () => {
  return (
    <Routes>
      <Route path={NAVIGATION_LIST.TOP} element={<TodoListPage />} />
    </Routes>
  );
};
