import React from 'react'
import CategoryAddForm from '../Fragments/FormAddCategory.tsx'
import Navigation from '../Elements/Header/Navigation.tsx'

const CategoryAddLayouts: React.FC = () => {
  return (
    <div>
      <Navigation>Tambah Kategori</Navigation>
      <div className="my-8 grid justify-items-center gap-2">
        <CategoryAddForm />
      </div>
    </div>
  )
}

export default CategoryAddLayouts
