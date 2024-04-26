import React from 'react'
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import ErrorInput from '../Error/ErrorInput.tsx'

interface LabelInputProps {
  label: string
  id: string
  type?: string
  placeholder?: string
  error?: FieldValues | undefined
  errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  btnTitle?: string
  toggle?: () => void
  onChange?: any
  additionalRules?: any
}

const LabelInput: React.FC<LabelInputProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  error,
  errorMessage,
  btnTitle,
  toggle,
  additionalRules,
  onChange,
}) => {
  const infoIcon = <FontAwesomeIcon icon={faCircleInfo} />
  return (
    <div className="relative mb-3">
      <label
        htmlFor={id}
        className={`block text-sm font-medium text-slate-700`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          {...additionalRules}
          id={id}
          name={id}
          placeholder={placeholder}
          className={`mt-1 block w-full rounded-md border-2 border-slate-300 px-4 py-2 shadow-sm placeholder:text-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
          autoComplete="off"
          onChange={onChange}
        />
      </div>
      {id.includes('assword') && (
        <button
          type="button"
          onClick={toggle}
          className="absolute right-2 top-8 aspect-square h-8 border"
        >
          {btnTitle}
        </button>
      )}
      {error && (
        <ErrorInput>
          {infoIcon} {error.message || errorMessage}
        </ErrorInput>
      )}
    </div>
  )
}
export default LabelInput
