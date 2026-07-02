import { BrowserRouter } from "react-router";
import { AuthRouter } from "../features/auth/routers/AuthRouter";
import { TodoRouter } from "../features/todos/routers/TodoRouter";
import { AuthProvider } from "../features/auth/contexts/AuthContext";

export const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthRouter />
        <TodoRouter />
      </AuthProvider>
    </BrowserRouter>
  );
};
