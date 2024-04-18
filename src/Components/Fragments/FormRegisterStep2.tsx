import React from 'react'
import { useForm } from 'react-hook-form'
import LabelInput from '../Elements/LabelInput/LabelInput'
import ButtonRegister from './ButtonRegister'

import { handleNext, handleBack } from '../Atoms/Function/HandleNextBack'

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

  const onSubmit = (data: any) => {
    console.log(data)
    if (onNext) {
      onNext()
    }
  }

  function handlePostalCode(e: React.ChangeEvent<HTMLInputElement>) {
    const postalCode = e.target.value
    if (!postalCode.match(/^\d{5}$/)) {
      e.target.setCustomValidity(
        'Please enter valid postal code, only number and must be 5 digit allowed',
      )
    } else {
      e.target.setCustomValidity('')
    }
    setValue('zipCode', postalCode)
  }

  const postalCodeRegex = /^\d{5}$/

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <LabelInput
          label="Alamat Jalan"
          id="streetAddress"
          type="text"
          placeholder="Masukan alamat anda"
          register={register}
          error={errors.streetAddress}
          errorMessage="Alamat wajib diisi"
        />
      </div>
      <div>
        <LabelInput
          label="Kota"
          id="city"
          type="text"
          placeholder="Masukan nama kota"
          register={register}
          error={errors.city}
          errorMessage="Kota wajib diisi"
        />
      </div>
      <div>
        <LabelInput
          label="Provinsi"
          id="state"
          type="text"
          placeholder="Masukan nama provinsi"
          register={register}
          error={errors.state}
          errorMessage="Provinsi wajib diisi"
        />
      </div>
      <div>
        <LabelInput
          label="Kode Pos"
          id="zipCode"
          type="text"
          placeholder="Masukan kode pos"
          register={register}
          error={errors.zipCode}
          errorMessage="Kode pos wajib diisi"
          pattern={postalCodeRegex}
          onChange={handlePostalCode}
        />
      </div>
      <ButtonRegister
        backClick={() => handleBack(onBack)}
        nextClick={() => handleNext(onNext)}
      />
    </form>
  )
}

export default FormRegisterStep2
