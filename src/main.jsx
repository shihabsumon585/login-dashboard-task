import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from './page/Login.jsx';
import DashboardLayout from './layout/DashboardLayout.jsx';
import DashboradHome from './page/DashboradHome.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
// import PrivateRoutes from './routes/PrivateRoutes.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children: [
      {
        index: true,
        element: <DashboradHome></DashboradHome>,
      },
      {
        path: "settings",
        element: <div>Dashboard Settings</div>,
      },
      {
        path: "profile",
        element: <div>Dashboard Profile</div>,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
