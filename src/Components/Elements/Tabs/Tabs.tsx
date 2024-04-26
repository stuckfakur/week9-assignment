import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faList } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Tabs: React.FC = () => {
  const homeIcon = <FontAwesomeIcon icon={faHouse} />
  const categoryIcon = <FontAwesomeIcon icon={faList} />
  return (
    <div className="fixed bottom-0 w-full">
      <div className="z-40 flex h-12 w-full items-center justify-center bg-slate-300">
        <div className="flex items-center">
          <Link
            to="/dashboard"
            className="group grid justify-items-center text-slate-600"
          >
            <div className="w-24 text-center group-hover:text-black">
              {homeIcon}
            </div>
            <div className="text-sm group-hover:text-black">Dashboard</div>
          </Link>
          <Link
            to="/categories"
            className="group grid justify-items-center text-slate-600"
          >
            <div className="w-24 text-center group-hover:text-black">
              {categoryIcon}
            </div>
            <div className="text-sm group-hover:text-black">Categories</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Tabs
