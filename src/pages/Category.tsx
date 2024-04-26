import React from 'react'
import CategoryLayout from '../Components/Layouts/CategoryLayouts.tsx'
import Tabs from '../Components/Elements/Tabs/Tabs.tsx'
import NavHeader from '../Components/Elements/Header/Navigation.tsx'

const CategoryPage: React.FC = () => {
  return (
    <>
      <NavHeader>Kategori</NavHeader>
      <CategoryLayout />
      <Tabs />
    </>
  )
}

export default CategoryPage
