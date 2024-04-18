import React from 'react'

interface HeaderComponentProps {
  name: string
  className: string
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  name,
  className,
}) => {
  return <div className={className}>Helo, Welcome {name}</div>
}

export default HeaderComponent
