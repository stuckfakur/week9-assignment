import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import LabelInput from '../Elements/LabelInput/LabelInput'
import ButtonRegister from './ButtonRegister'
import { handleBack } from '../Atoms/Function/HandleNextBack'
import { useLocalStorageRegister as UseLCR } from '../Atoms/Function/getLocalStorageRegister.tsx'
import axios from 'axios'
interface FormRegisterStep3Props {
  onBack?: () => void
}

const FormRegisterStep3: React.FC<FormRegisterStep3Props> = ({ onBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  UseLCR({ setValue, keys: 'formRegister' })

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/

  const onSubmit = (data: any) => {
    UseLCR({ data, keys: 'formRegister' })
    console.log(data)

    const userData = JSON.parse(localStorage.getItem('formRegister') || '{}')
    axios
      .post('https://library-crud-sample.vercel.app/api/user/register', {
        name: userData.fullname,
        email: userData.email,
        password: userData.password,
      })
      .then((response: any) => {
        if (response.status === 200) {
          alert('successful create account')
          localStorage.removeItem('formRegister')
          navigate('/login')
        }
      })
      .catch((error: any) => {
        if (error.response.status === 400) {
          alert(error.response.data.details)
        } else {
          console.error(error)
        }
      })
  }

  function handlePassword() {
    setShowPassword(!showPassword)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <LabelInput
          label="Username"
          id="username"
          type="text"
          placeholder="Masukan username"
          error={errors.username}
          errorMessage="Username wajib diisi"
          additionalRules={register('username', {
            required: 'Username wajib diisi',
          })}
        />
      </div>
      <div>
        <LabelInput
          label="Password"
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Masukan password"
          btnTitle={showPassword ? 'Hide' : 'Show'}
          toggle={handlePassword}
          additionalRules={register('password', {
            required: 'Password wajib diisi',
            pattern: {
              value: passwordRegex,
              message:
                'Password harus ada 1 huruf besar, 1 nomor dan min 6 karakter',
            },
          })}
          error={errors.password}
        />
      </div>
      <div>
        <LabelInput
          label="Konfirmasi Password"
          id="confirmPassword"
          type={showPassword ? 'text' : 'password'}
          placeholder="Masukan konfirmasi password"
          btnTitle={showPassword ? 'Hide' : 'Show'}
          toggle={handlePassword}
          error={errors.confirmPassword}
          errorMessage="Konfirmasi password wajib diisi"
          additionalRules={register('confirmPassword', {
            required: 'Password konfirmasi wajib diisi',
            validate: (value) => {
              const password = getValues('password')
              if (value !== password) {
                return 'Passwords tidak sama'
              }
            },
          })}
        />
      </div>
      <ButtonRegister backClick={() => handleBack(onBack)}>
        Submit
      </ButtonRegister>
    </form>
  )
}

export default FormRegisterStep3
