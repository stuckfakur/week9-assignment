import React from 'react'
import { useForm } from 'react-hook-form'
import LabelInput from '../Elements/LabelInput/LabelInput'
import ButtonRegister from './ButtonRegister'

import { handleBack } from '../Atoms/Function/HandleNextBack'
import { useLocalStorageRegister as UseLCR } from '../Atoms/Function/getLocalStorageRegister.tsx'

interface FormRegisterStep2Props {
  onNext?: () => void
  onBack?: () => void
}

const FormRegisterStep2: React.FC<FormRegisterStep2Props> = ({
  onNext,
  onBack,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  UseLCR({ setValue, keys: 'formRegister' })

  const onSubmit = (data: any) => {
    UseLCR({ data, keys: 'formRegister' })
    console.log(data)
    if (onNext) {
      onNext()
    }
  }
  const postalCodeRegex = /^\d{5}$/

  function handlePostalCode(e: React.ChangeEvent<HTMLInputElement>) {
    const postalCode = e.target.value
    if (!postalCode.match(postalCodeRegex)) {
      e.target.setCustomValidity(
        'Please enter valid postal code, only number and must be 5 digit allowed',
      )
    } else {
      e.target.setCustomValidity('')
    }
    setValue('zipCode', postalCode)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <LabelInput
          label="Alamat Jalan"
          id="streetAddress"
          type="text"
          placeholder="Masukan alamat anda"
          error={errors.streetAddress}
          errorMessage="Alamat wajib diisi"
          additionalRules={register('streetAddress', { required: true })}
        />
      </div>
      <div>
        <LabelInput
          label="Kota"
          id="city"
          type="text"
          placeholder="Masukan nama kota"
          error={errors.city}
          errorMessage="Kota wajib diisi"
          additionalRules={register('city', { required: true })}
        />
      </div>
      <div>
        <LabelInput
          label="Provinsi"
          id="state"
          type="text"
          placeholder="Masukan nama provinsi"
          error={errors.state}
          errorMessage="Provinsi wajib diisi"
          additionalRules={register('state', { required: true })}
        />
      </div>
      <div>
        <LabelInput
          label="Kode Pos"
          id="zipCode"
          type="text"
          placeholder="Masukan kode pos"
          error={errors.zipCode}
          errorMessage="Kode pos wajib diisi"
          onChange={handlePostalCode}
          additionalRules={register('zipCode', { required: true })}
        />
      </div>
      <ButtonRegister backClick={() => handleBack(onBack)}>Next</ButtonRegister>
    </form>
  )
}

export default FormRegisterStep2
