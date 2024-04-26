import { useEffect, useState } from 'react'
import HeaderComponent from '../Components/Elements/Header/Header'
import { Link } from 'react-router-dom'
import axios from 'axios'
import FormLogin from '../Components/Fragments/FormLogin.tsx'

const LoginPage = () => {
  const [name, setName] = useState('')

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

          setName(response.data.name)
        })
        .catch((error) => console.error(error))
    }
  }, [])

  return (
    <div className="grid justify-items-center">
      <HeaderComponent name={name} className="text-center" />
      <div className="group mt-12 grid w-full justify-items-center gap-5 rounded-md bg-slate-200 p-4 shadow transition duration-300 hover:bg-slate-100 sm:w-[500px]">
        <h1>Login Page</h1>
        <FormLogin />
        <p>
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-sm underline opacity-40 hover:opacity-100 group-hover:text-red-600"
          >
            Create account now
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
