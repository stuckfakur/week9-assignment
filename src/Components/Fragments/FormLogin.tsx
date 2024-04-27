import { useForm } from 'react-hook-form'
import axios from 'axios'
import LabelInput from '../Elements/LabelInput/LabelInput.tsx'
import { useEffect, useState } from 'react'
import ButtonRegister from './ButtonRegister.tsx'
import { useNavigate } from 'react-router-dom'

const FormLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const getUsers = () => {
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
  }
  const onSubmit = async (data: any) => {
    setLoading(true)
    console.log(data)

    axios
      .post('https://library-crud-sample.vercel.app/api/user/login', {
        email: data.email,
        password: data.password,
      })
      .then((response: any) => {
        if (response.status === 200) {
          alert('successful login')
          localStorage.setItem('token', response.data.token)
          getUsers()
          navigate('/dashboard')
        }
      })
      .catch((error: any) => {
        if (error.response.status === 400) {
          alert('invalid email or password')
        }
      })
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    getUsers()
  }, [])

  const handlePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`w-full`}>
      <LabelInput
        label="Email"
        id="email"
        placeholder="Masukan email anda"
        error={errors.email}
        additionalRules={register('email', {
          required: 'Email wajib diisi',
          pattern: {
            value: /\S+@\S+\.\S{2,}/,
            message: 'Tolong masukan email yang valid',
          },
        })}
      />
      <LabelInput
        label="Password"
        id="password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Masukan password anda"
        btnTitle={showPassword ? 'Hide' : 'Show'}
        error={errors.password}
        toggle={handlePassword}
        additionalRules={register('password', {
          required: 'Password wajib diisi',
        })}
      />
      <ButtonRegister backOff disabled={loading}>
        {loading ? 'Loading ...' : 'Login'}
      </ButtonRegister>
    </form>
  )
}

export default FormLogin
