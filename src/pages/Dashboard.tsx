import React, { useEffect } from 'react'
import Tabs from '../Components/Elements/Tabs/Tabs.tsx'
import NavHeader from '../Components/Elements/Header/Navigation.tsx'
import axios from 'axios'

const DashboardPage: React.FC = () => {
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
    <>
      <NavHeader>Dashboard</NavHeader>
      <div className="flex h-[90vh] items-center justify-center">
        Dashboard is under construction
      </div>
      <Tabs />
    </>
  )
}

export default DashboardPage
