import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

interface NavHeaderProps {
  children: string
}
const NavHeader: React.FC<NavHeaderProps> = ({ children }) => {
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
      </div>
    </div>
  )
}

export default NavHeader
