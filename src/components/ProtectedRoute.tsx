import { useSelector } from 'react-redux';
import { Rootstate } from '../store';
import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { Fragment } from 'react';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const user = useSelector((state: Rootstate) => state.user);
  if (!user) {
    return <Navigate to='/' replace />;
  }
  if (!children) {
    return null;
  }
  return <Fragment>{children}</Fragment>;
};

export default ProtectedRoute;
