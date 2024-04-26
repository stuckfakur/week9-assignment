import React from 'react'
import Tabs from '../Components/Elements/Tabs/Tabs.tsx'
import NavHeader from '../Components/Elements/Header/Navigation.tsx'

const DashboardPage: React.FC = () => {
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
