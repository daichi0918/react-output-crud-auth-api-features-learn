import { BrowserRouter } from 'react-router';
import { AuthRouter } from '../features/auth/routers';
import { TodoRouter } from '../features/todos/routers';

export const Router = () => {
  return (
    <BrowserRouter>
      <AuthRouter />
      <TodoRouter />
    </BrowserRouter>
  );
};
