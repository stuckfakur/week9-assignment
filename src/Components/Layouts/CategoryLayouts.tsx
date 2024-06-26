import React from 'react'
import Button from '../Elements/Button/Button.tsx'
import CategoryTable from '../Fragments/CategoryTable.tsx'
import { useNavigate } from 'react-router-dom'

const CategoryLayout: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center px-12 py-4">
      <div className="w-full md:w-full lg:w-3/4">
        <div className="my-2 flex justify-end">
          <Button
            onClick={() => {
              navigate('/category/create')
            }}
          >
            Tambah
          </Button>
        </div>
        <CategoryTable />
      </div>
    </div>
  )
}

export default CategoryLayout
