import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter as Router, RouterProvider } from 'react-router-dom'
import HomePages from './pages/Home'
import ErrorPage from './pages/404'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'

const router = Router([
  {
    path: '/',
    element: <HomePages />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },

  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/hehe',
    element: <HomePages />,
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
