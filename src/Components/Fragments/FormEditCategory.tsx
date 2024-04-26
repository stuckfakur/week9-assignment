import React, { useEffect } from 'react'
import LabelInput from '../Elements/LabelInput/LabelInput.tsx'
import { useForm } from 'react-hook-form'
import Button from '../Elements/Button/Button.tsx'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const CategoryEditForm: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  useEffect(() => {
    setValue('id', id)
    axios
      .get(`https://library-crud-sample.vercel.app/api/category/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setValue('id', response.data.id)
        setValue('category_name', response.data.category_name)
        setValue('category_description', response.data.category_description)
        setValue('is_active', response.data.is_active)
      })
      .catch((errors) => console.log(errors))
  }, [id, setValue])

  const onSubmit = (data: any) => {
    console.log(data)
    const token = localStorage.getItem('token')

    if (token) {
      axios
        .put(
          'https://library-crud-sample.vercel.app/api/category/update',
          {
            id: data.id,
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
        .then(() => {
          alert('Category updated successfully')
          navigate('/categories')
        })
        .catch((e) => console.error(e))
    }
  }
  return (
    <div className="flex w-96 items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <LabelInput
          label="ID"
          id="id"
          type="text"
          error={errors.id}
          errorMessage="Kategori wajib diisi"
          {...{ disabled: true }}
          additionalRules={register('category_name', {
            required: true,
            value: id,
          })}
        />
        <LabelInput
          label="Kategori"
          id="category_name"
          type="text"
          error={errors.category_name}
          errorMessage="Kategori wajib diisi"
          additionalRules={register('category_name', {
            required: true,
          })}
        />
        <LabelInput
          label="Kategori Deskripsi"
          id="category_description"
          type="text"
          error={errors.category_description}
          errorMessage="Kategori wajib diisi"
          additionalRules={register('category_description', {
            required: true,
          })}
        />
        <div>
          <p>Status</p>
          <div>
            <div className="flex gap-2">
              <span>
                <input
                  type="radio"
                  id="is_active"
                  value="true"
                  {...register('is_active')}
                />
                <label htmlFor="is_active">Aktif</label>
              </span>
              <span>
                <input
                  type="radio"
                  id="is_active"
                  value="true"
                  {...register('is_active')}
                />
                <label htmlFor="is_active">Tidak</label>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button onClick={() => navigate('/categories')} aria="back">
            Kembali
          </Button>
          <Button type="submit">Ubah</Button>
        </div>
      </form>
    </div>
  )
}

export default CategoryEditForm
