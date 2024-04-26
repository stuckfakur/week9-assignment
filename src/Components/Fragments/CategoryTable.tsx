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
    <table className="w-full table-auto rounded-md border text-left">
      <thead className="bg-green-100 text-slate-800">
        <tr>
          <th className="border">Id</th>
          <th className="min-w-1/2 border">Nama</th>
          <th className="border">Deskripsi</th>
          <th className="border">Aktif</th>
          <th className="w-36 border text-center">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category: any, index: number) => (
          <tr key={index + 1}>
            <td>{index + 1}</td>
            <td>{category.category_name}</td>
            <td>{category.category_description}</td>
            <td>{category.is_active ? 'Ya' : 'Tidak'}</td>
            <td className="flex gap-2">
              <Button className="mb-4 bg-blue-500">Ubah</Button>
              <Button
                onClick={() => handleDelete(category.id)}
                className="mb-4 bg-red-500"
              >
                Hapus
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CategoryTable
