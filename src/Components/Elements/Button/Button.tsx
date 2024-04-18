import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  onClick?: any
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, className = 'bg-teal-400', type = 'button', disabled, ...props }) => {
  function colorBtn() {
    switch (true) {
      case disabled:
        return 'bg-slate-400 opacity-30 text-slate-500'
      case type === 'button':
        return 'bg-teal-400 focus:bg-teal-800'
      case type === 'submit':
        return 'bg-blue-600 focus:bg-blue-800'
    }
  }
  return (
    <button type={type} className={`mx-1 mt-4 ${colorBtn()} rounded-md px-4 py-2 font-medium text-white ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
