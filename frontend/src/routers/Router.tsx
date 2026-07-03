import { BrowserRouter } from 'react-router';
import { AuthRouter } from '../features/auth/routers';
import { TodoRouter } from '../features/todos/routers';
import { AuthProvider } from '../features/auth/contexts/AuthContext';

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
