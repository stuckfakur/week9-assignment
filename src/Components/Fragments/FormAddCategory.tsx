import React, { useState } from 'react'
import LabelInput from '../Elements/LabelInput/LabelInput.tsx'
import { useForm } from 'react-hook-form'
import Button from '../Elements/Button/Button.tsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CategoryAddForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: any) => {
    setLoading(true)
    const token = localStorage.getItem('token')

    if (token) {
      try {
        await axios.post(
          'https://library-crud-sample.vercel.app/api/category/create',
          {
            category_name: data.category_name,
            category_description: data.category_description,
            is_active: data.is_active,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        alert('Category added successfully')
        navigate('/categories')
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div className="flex w-96 items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <LabelInput
          label="Kategori"
          id="category_name"
          type="text"
          error={errors.category_name}
          errorMessage="Kategori wajib diisi"
          additionalRules={register('category_name', { required: true })}
        />
        <LabelInput
          label="Kategori Deskripsi"
          id="category_description"
          type="text"
          error={errors.category_description}
          errorMessage="Kategori wajib diisi"
          additionalRules={register('category_description', { required: true })}
        />
        <div>
          <p>Status</p>
          <div>
            <div className="flex gap-2">
              <span>
                <input
                  type="radio"
                  id="is_active_true"
                  value="true"
                  {...register('is_active')}
                />
                <label htmlFor="is_active_true">Aktif</label>
              </span>
              <span>
                <input
                  type="radio"
                  id="is_active_false"
                  value="false"
                  {...register('is_active')}
                />
                <label htmlFor="is_active_false">Tidak</label>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button
            onClick={() => navigate(-1)}
            aria="back"
            className="col-start-1"
          >
            Kembali
          </Button>
          <Button type="submit" className="col-start-2" disabled={loading}>
            {loading ? 'Loading...' : 'Tambah'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CategoryAddForm
