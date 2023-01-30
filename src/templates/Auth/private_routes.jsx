import { useContext } from 'react';
import { MyContext } from '../../components/Contexts';
import { Navigate, Outlet } from 'react-router-dom';

export const Private = () => {
  const { authenticated } = useContext(MyContext);

  if (!authenticated) {
    return <Navigate to='/' />
  }

  return <Outlet />
}
