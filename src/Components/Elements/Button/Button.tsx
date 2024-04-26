import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  onClick?: any
  disabled?: boolean
  aria?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  disabled,
  aria,
  ...props
}) => {
  function colorBtn(ariaLabel?: string) {
    switch (true) {
      case disabled:
        return 'bg-slate-400 opacity-30 text-slate-500'
      case ariaLabel === 'btnSelect' || ariaLabel === 'edit':
        return 'bg-blue-600 focus:bg-blue-800 hover:bg-blue-800'
      case ariaLabel === 'back':
        return 'bg-slate-600 focus:bg-slate-800 hover:bg-slate-800'
      case ariaLabel === 'delete':
        return 'bg-red-600 focus:bg-red-800 hover:bg-red-800'
      case type === 'button':
        return 'bg-teal-400 focus:bg-teal-800 hover:bg-teal-800'
      case type === 'submit':
        return 'bg-blue-600 focus:bg-blue-800 hover:bg-blue-800'
      default:
        return ''
    }
  }
  return (
    <button
      type={type}
      className={`mt-4 ${colorBtn(aria)} rounded-md px-4 py-2 font-medium text-white ${className}`}
      aria-label={aria}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
