import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import React from 'react'

interface NavHeaderProps {
  children?: string
  hidden?: boolean
}
const NavHeader: React.FC<NavHeaderProps> = ({ children, hidden = false }) => {
  const Home = <FontAwesomeIcon icon={faHouse} />
  const navigate = useNavigate()

  function handleHome() {
    navigate('/')
  }
  return (
    <div className="sticky top-0 z-40 flex h-12 w-full items-center justify-center bg-slate-300 shadow">
      <div className="relative">
        <div
          onClick={handleHome}
          className="fixed left-0 top-0 p-3 text-slate-600 hover:text-slate-800"
        >
          {Home}
        </div>
        <p className="text-xl font-bold text-slate-600">{children}</p>
        {!hidden && <NavName hidden={hidden} />}
      </div>
    </div>
  )
}

const NavName: React.FC<NavHeaderProps> = ({ hidden }) => {
  const users = JSON.parse(localStorage.getItem('users') || '{}')
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('users')
    navigate('/login')
  }
  return (
    <div
      className={`${hidden ? 'hidden' : ''} fixed right-0 top-0 flex items-center gap-2 p-3 text-slate-600 hover:text-black`}
    >
      {users ? users.name : 'none'}
      <button className="group relative flex aspect-square w-6 items-center justify-center rounded-full bg-slate-400 text-white">
        {users && users.name ? users.name.slice(0, 1) : 'A'}
        <span className="hidden group-focus:block">
          <span className="absolute right-0 top-8 flex h-16 w-36 items-center justify-center rounded-md bg-white shadow outline outline-2 outline-teal-400">
            <a
              onClick={handleLogout}
              className="rounded-md bg-slate-400 px-4 py-1 hover:bg-black"
            >
              Logout
            </a>
          </span>
        </span>
      </button>
    </div>
  )
}
export default NavHeader
