import { createBrowserRouter as Router } from 'react-router-dom'
import HomePages from '../../pages/Home.tsx'
import ErrorPage from '../../pages/404.tsx'
import RegisterPage from '../../pages/Register.tsx'
import LoginPage from '../../pages/Login.tsx'
import ProfilePage from '../../pages/Profile.tsx'
import DashboardPage from '../../pages/Dashboard.tsx'
import CategoryPage from '../../pages/Category.tsx'
import CategoryAddForm from '../Fragments/FormAddCategory.tsx'

export const router = Router([
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
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/categories',
    element: <CategoryPage />,
  },
  {
    path: '/category/create',
    element: <CategoryAddForm />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
])
