import React from 'react'
import Navigation from '../Elements/Header/Navigation.tsx'
import CategoryEditForm from '../Fragments/FormEditCategory.tsx'

const CategoryEditLayouts: React.FC = () => {
  return (
    <div>
      <Navigation>Edit Kategori</Navigation>
      <div className="my-8 grid justify-items-center gap-2">
        <CategoryEditForm />
      </div>
    </div>
  )
}

export default CategoryEditLayouts
