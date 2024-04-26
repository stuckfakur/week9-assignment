import React from 'react'
import Button from '../Button/Button.tsx'
import axios from 'axios'

interface HeaderComponentProps {
  name: any
  className: string
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  name,
  className,
}) => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('users')

    axios
      .delete('https://library-crud-sample.vercel.app/api/user/logout', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(() => {
        alert('success logout')
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className={className}>
      Helo, Welcome {name} <Button onClick={handleLogout}>Logout</Button>{' '}
    </div>
  )
}

export default HeaderComponent
