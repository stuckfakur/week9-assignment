import React from 'react'

interface HeaderComponentProps {
  name: string
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ name }) => {
  return <div>Helo, Welcome {name}</div>
}

export default HeaderComponent
