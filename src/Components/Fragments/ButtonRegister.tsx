import Button from '../Elements/Button/Button'

interface ButtonRegisterProps {
  backClick?: () => void
  nextClick?: () => void
  disabled?: boolean
  backOff?: boolean
  nextOff?: boolean
  children?: React.ReactNode
}

const ButtonRegister: React.FC<ButtonRegisterProps> = ({
  backClick,
  backOff,
  children,
  disabled = false,
}) => {
  return (
    <div className="grid w-full grid-cols-3 gap-2">
      <div className={`${backOff ? 'hidden' : ''} col-start-1`}>
        <Button type="button" className="w-full" onClick={backClick}>
          Back
        </Button>
      </div>
      <div className="col-start-3">
        <Button type="submit" className="w-full" disabled={disabled}>
          {children}
        </Button>
      </div>
    </div>
  )
}

export default ButtonRegister
