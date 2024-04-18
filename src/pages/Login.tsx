import { useEffect, useState } from 'react'
import HeaderComponent from '../Components/Elements/Header/Header'

const LoginPage = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    if (name === '') {
      // const input = window.prompt('Siapa nama anda?')
      const input = 'Admin'
      if (input) {
        setName(input)
      }
    }
  }, [name])
  return (
    <div className="grid justify-items-center">
      <HeaderComponent name={name} className="text-center" />
      <div className="group mt-12 grid w-full justify-items-center gap-5 rounded-md bg-slate-200 p-4 shadow transition duration-300 hover:bg-slate-100 sm:w-[500px]">
        <h1 className="text-3xl font-bold group-hover:text-slate-600">
          Login Page
        </h1>

        <p>
          Do you have an account ?
          <a
            href="/register"
            className="text-sm underline opacity-40 hover:opacity-100 group-hover:text-red-600"
          >
            Create account now
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
