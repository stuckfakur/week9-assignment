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
      <HeaderComponent name={name} />

      <h1 className="text-3xl font-bold">Login Page</h1>

      <p>
        Do you have an account ?
        <a href="/register" className="text-sm underline opacity-40">
          Create account now
        </a>
      </p>
    </div>
  )
}

export default LoginPage
