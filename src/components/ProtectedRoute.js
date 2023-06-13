import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
    const token = localStorage.getItem('jokesAppUserInfo');
  if (token === null) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
