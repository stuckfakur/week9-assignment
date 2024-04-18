import Button from '../Elements/Button/Button'

interface ButtonRegisterProps {
  backClick?: () => void
  nextClick?: () => void
  disabled?: false
  backOff?: boolean
  nextOff?: boolean
}

const ButtonRegister: React.FC<ButtonRegisterProps> = ({ backClick, nextClick, backOff, nextOff }) => {
  return (
    <div className="grid w-full grid-cols-12 gap-2">
      <div className="col-span-3 col-start-1">
        <Button type="button" className="w-full" onClick={backClick} disabled={backOff}>
          Back
        </Button>
      </div>
      <div className="col-span-6 col-start-4">
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </div>
      <div className="col-span-3 col-start-10">
        <Button type="button" className="w-full" onClick={nextClick} disabled={nextOff}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default ButtonRegister
