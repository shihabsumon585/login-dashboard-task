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
import Help from './page/Help.jsx';
import Calender from './page/Calender.jsx';
import Products from './page/Products.jsx';
import Analytics from './page/Analytics.jsx';
import Users from './page/Users.jsx';
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
        path: "profile",
        element: <div>Dashboard Profile</div>,
      },
      {
        path: "products",
        element: <Products></Products>
      },
      {
        path: "all-users",
        element: <div>Dashboard All Users</div>,
      },
      {
        path: "help",
        element: <Help></Help>,
      },
      {
        path: "calendar",
        element: <Calender></Calender>
      },
      {
        path: "analytics",
        element: <Analytics></Analytics>
      },
      {
        path: "users",
        element: <Users></Users>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
