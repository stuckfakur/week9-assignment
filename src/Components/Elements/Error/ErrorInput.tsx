import React from 'react'

interface ErrorFormProps {
  children: React.ReactNode
}
const ErrorInput: React.FC<ErrorFormProps> = ({ children }) => {
  return (
    <span
      className={`mt-1 w-full rounded-md bg-slate-800 px-2 py-1 text-red-500 `}
      role="alert"
    >
      {children}
    </span>
  )
}

export default ErrorInput
