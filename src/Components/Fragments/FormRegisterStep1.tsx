import React from 'react'
import { useForm } from 'react-hook-form'
import LabelInput from '../Elements/LabelInput/LabelInput'
import ButtonRegister from './ButtonRegister'

import { handleNext } from '../Atoms/Function/HandleNextBack'
import { useLocalStorageRegister as UseLCR } from '../Atoms/Function/getLocalStorageRegister.tsx'

interface FormRegisterStep1Props {
  onNext?: () => void
}

const FormRegisterStep1: React.FC<FormRegisterStep1Props> = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  UseLCR({ setValue, keys: 'formRegistrasiStep1' })
  const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const onSubmit = (data: any) => {
    UseLCR({ data, keys: 'formRegistrasiStep1' })
    console.log(data)
    if (onNext) {
      onNext()
    }
  }

  function handlePattern(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target as HTMLInputElement
    console.log(input.value)
    if (!patternEmail.test(input.value)) {
      input.setCustomValidity('Penulisan email belum sesuai')
    } else {
      input.setCustomValidity('')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <LabelInput
          label="Nama Lengkap"
          id="fullname"
          type="text"
          placeholder="Masukan nama anda"
          register={register}
          error={errors.fullname}
          errorMessage="Nama lengkap wajib diisi"
        />
      </div>
      <div>
        <LabelInput
          label="Email"
          id="email"
          type="text"
          placeholder="Masukan email anda"
          register={register}
          error={errors.email}
          errorMessage="Email wajib diisi"
          onChange={handlePattern}
        />
      </div>
      <div>
        <LabelInput
          label="Tanggal Lahir"
          id="dob"
          type="date"
          register={register}
          error={errors.dob}
          errorMessage="Tanggal lahir wajib diisi"
        />
      </div>
      <ButtonRegister nextClick={() => handleNext(onNext)} backOff />
    </form>
  )
}

export default FormRegisterStep1
