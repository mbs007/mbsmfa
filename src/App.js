import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from "./components/LoginForm";
import Error from "./components/Error";

import Home from "./components/Home";

const appRouter = createBrowserRouter([
  { path: "/login", element: <LoginForm /> },
  {
    path: "/",
    element: <ProtectedRoute />,
    errorElement: <Error />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
const App = () => <RouterProvider router={appRouter} />;

export default App;
