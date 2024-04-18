import React from 'react'

interface LabelProps {
  htmlFor: string
  classname?: string
  children: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ htmlFor, classname, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={` text-sm block font-medium text-gray-700 ${classname}`}
    >
      {children}
    </label>
  )
}

export default Label
