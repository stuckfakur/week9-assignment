import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePages: React.FC = () => {
  const navigate = useNavigate()

  function handleLogin() {
    navigate('/login')
  }

  function handleRegister() {
    navigate('/register')
  }

  return (
    <div className="font-bold text-blue-600">
      <p>Hello world gaes</p>
      <p>Do you have an account ?</p>
      <button
        type="button"
        className="mx-1 rounded-md bg-blue-600 px-4 py-2 text-white"
        onClick={handleLogin}
      >
        Yes
      </button>
      <button
        type="button"
        className="mx-1 rounded-md bg-blue-600 px-4 py-2 text-white"
        onClick={handleRegister}
      >
        No
      </button>
    </div>
  )
}

export default HomePages
