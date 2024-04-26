import { useEffect } from 'react'
import axios from 'axios'
import LoginLayouts from '../Components/Layouts/LoginLayouts.tsx'
import NavHeader from '../Components/Elements/Header/Navigation.tsx'

const LoginPage = () => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios
        .get('https://library-crud-sample.vercel.app/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          localStorage.setItem(
            'users',
            JSON.stringify({
              name: response.data.name,
              email: response.data.email,
            }),
          )
        })
        .catch((error) => console.error(error))
    }
  }, [])

  return (
    <div className="grid justify-items-center">
      <NavHeader hidden />
      <LoginLayouts />
    </div>
  )
}

export default LoginPage
