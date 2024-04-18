import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Components/Elements/Button/Button'

const HomePages: React.FC = () => {
  const navigate = useNavigate()

  function handleLogin() {
    navigate('/login')
  }

  function handleRegister() {
    navigate('/register')
  }

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="grid gap-4 rounded-md bg-slate-200 px-4 py-2 text-center font-bold text-blue-600">
        <p>Hello world gaes</p>
        <p>Do you have an account ?</p>
        <div className="flex gap-2">
          <Button aria="btnSelect" onClick={handleLogin} className="w-full">
            Yes
          </Button>
          <Button aria="btnSelect" onClick={handleRegister} className="w-full">
            No
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomePages
