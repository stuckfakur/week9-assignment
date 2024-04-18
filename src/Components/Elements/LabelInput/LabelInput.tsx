import React from 'react'
import {
  FieldValues,
  FieldError,
  Merge,
  FieldErrorsImpl,
} from 'react-hook-form'

interface LabelInputProps {
  label: string
  id: string
  type: string
  autocomplete?: 'on' | 'off'
  placeholder?: string
  register: any
  error: FieldValues | undefined
  errorMessage?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
  pattern?: RegExp
  title?: string
  btnTitle?: string
  toggle?: () => void
  onChange?: Function
  additionalRules?: any
  additionalErrorMsg?: string
}

const LabelInput: React.FC<LabelInputProps> = ({
  label,
  id,
  type,
  placeholder,
  register,
  error,
  errorMessage,
  pattern,
  title,
  btnTitle,
  toggle,
  onChange,
  additionalRules,
  additionalErrorMsg,
  ...props
}) => {
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
          {...register(id, { required: true }, additionalRules)}
          id={id}
          placeholder={placeholder}
          className={`mt-1 block w-full rounded-md border-2 border-slate-300 px-4 py-2 shadow-sm placeholder:text-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
          pattern={pattern}
          title={title}
          onChange={onChange}
          autoComplete="off"
          {...props}
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
        <span className={`absolute ml-4 text-xs italic text-red-500`}>
          {error.message || errorMessage || additionalErrorMsg}
        </span>
      )}
    </div>
  )
}

export default LabelInput
