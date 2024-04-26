import React from 'react'
import { useForm } from 'react-hook-form'
import LabelInput from '../Elements/LabelInput/LabelInput'
import ButtonRegister from './ButtonRegister'

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

  UseLCR({ setValue, keys: 'formRegister' })
  const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const onSubmit = (data: any) => {
    UseLCR({ data, keys: 'formRegister' })
    console.log(data)
    if (onNext) {
      onNext()
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
          error={errors.fullname}
          errorMessage="Nama lengkap wajib diisi"
          additionalRules={register('fullname', {
            required: true,
            pattern: {
              value: /^[a-zA-Z ]{3,16}/,
              message: 'Minimal 3 karakter dan maksimal 16 karakter',
            },
          })}
        />
      </div>
      <div>
        <LabelInput
          label="Email"
          id="email"
          type="text"
          placeholder="Masukan email anda"
          error={errors.email}
          errorMessage="Email wajib diisi"
          additionalRules={register('email', {
            required: true,
            pattern: {
              value: patternEmail,
              message: 'Penulisan email harus sesuai',
            },
          })}
        />
      </div>
      <div>
        <LabelInput
          label="Tanggal Lahir"
          id="dob"
          type="date"
          error={errors.dob}
          errorMessage="Tanggal lahir wajib diisi"
          additionalRules={register('dob', { required: true })}
        />
      </div>
      <ButtonRegister backOff>Next</ButtonRegister>
    </form>
  )
}

export default FormRegisterStep1
