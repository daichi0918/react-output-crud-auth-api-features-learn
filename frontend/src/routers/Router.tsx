import { BrowserRouter } from 'react-router';
import { AuthRouter } from '../features/auth/routers';

export const Router = () => {
  return (
    <BrowserRouter>
      <AuthRouter />
    </BrowserRouter>
  );
};
