import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import LabelInput from '../Elements/LabelInput/LabelInput'
import ButtonRegister from './ButtonRegister'
import { handleBack } from '../Atoms/Function/HandleNextBack'

interface FormRegisterStep3Props {
  onBack?: () => void
}

const FormRegisterStep3: React.FC<FormRegisterStep3Props> = ({ onBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/

  const onSubmit = (data: any) => {
    console.log(data)
    alert('successful create account')
    navigate('/login')
  }

  function handlePassword() {
    setShowPassword(!showPassword)
  }

  function handleEventPassword(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target as HTMLInputElement
    if (!passwordRegex.test(input.value)) {
      input.setCustomValidity(
        'Harus ada 1 huruf besar, 1 nomor dan min 6 karakter',
      )
    } else {
      input.setCustomValidity('')
    }
  }

  function handleConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target as HTMLInputElement
    const password = input.form?.elements.namedItem(
      'password',
    ) as HTMLInputElement

    if (password && input.value !== password.value) {
      input.setCustomValidity('Password belum sesuai')
    } else {
      input.setCustomValidity('')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <LabelInput
          label="Username"
          id="username"
          type="text"
          placeholder="Masukan username"
          register={register}
          error={errors.username}
          errorMessage="Username wajib diisi"
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
          register={register}
          onChange={handleEventPassword}
          error={errors.password}
          errorMessage={errors.password && errors.password.message}
          additionalErrorMsg="Harus ada 1 huruf besar, 1 nomor dan min 6 karakter"
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
          register={register}
          onChange={handleConfirmPassword}
          error={errors.confirmPassword}
          errorMessage={
            errors.confirmPassword && errors.confirmPassword.message
          }
          additionalErrorMsg="Password belum sesuai"
        />
      </div>
      <ButtonRegister backClick={() => handleBack(onBack)} nextOff />
    </form>
  )
}

export default FormRegisterStep3
