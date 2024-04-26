import React, { useEffect, useState } from 'react'
import Button from '../Elements/Button/Button.tsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CategoryTable: React.FC = () => {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const getCategories = async () => {
    const token = localStorage.getItem('token')
    try {
      if (token) {
        const { data } = await axios.get(
          'https://library-crud-sample.vercel.app/api/category',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        setCategories(data)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleEdit = (id: number) => {
    navigate('/category/edit/' + id)
  }

  const handleDelete = (id: number) => {
    axios
      .delete('https://library-crud-sample.vercel.app/api/category/' + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert('success deleted')
          window.location.reload()
          navigate('/categories')
        }
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <table className="w-full table-auto rounded-md border text-left text-sm">
      <thead className="bg-green-100 text-slate-800">
        <tr>
          <th className="border pl-2">Id</th>
          <th className="min-w-1/2 border">Nama</th>
          <th className="border">Deskripsi</th>
          <th className="border">Aktif</th>
          <th className="w-36 border text-center">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {categories.length === 0 ? (
          <tr>
            <td colSpan={5} className="text-center">
              Tidak ada data
            </td>
          </tr>
        ) : (
          categories.map((category: any, index: number) => (
            <tr key={index + 1}>
              <td className="pl-2">{index + 1}</td>
              <td>{category.category_name}</td>
              <td>{category.category_description}</td>
              <td>{category.is_active ? 'Ya' : 'Tidak'}</td>
              <td className="flex gap-2 pr-2">
                <Button
                  onClick={() => handleEdit(category.id)}
                  aria="edit"
                  className="mb-4"
                >
                  Ubah
                </Button>
                <Button
                  onClick={() => handleDelete(category.id)}
                  aria="delete"
                  className="mb-4"
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

export default CategoryTable
