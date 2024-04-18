import CircleTimeline from '../Elements/Timeline/Circle'
import LineTimeline from '../Elements/Timeline/Line'

interface TimelineregisterProps {
  currentStep: number
}

const TimelineRegister: React.FC<TimelineregisterProps> = ({ currentStep }) => {
  return (
    <header className="grid justify-items-center">
      <h1 className="mb-2 text-2xl font-bold">Timeline</h1>
      <div className="relative w-full">
        <div className="absolute top-6 flex w-full px-4 sm:px-12">
          <LineTimeline currentStep={currentStep === 2 || currentStep === 3} />
          <LineTimeline currentStep={currentStep === 3} />
        </div>
        <div className="relative flex w-full items-center justify-between gap-5 px-4 sm:px-12">
          <CircleTimeline currentStep={currentStep === 1 || currentStep === 2 || currentStep === 3}>1</CircleTimeline>
          <CircleTimeline currentStep={currentStep === 2 || currentStep === 3}>2</CircleTimeline>
          <CircleTimeline currentStep={currentStep === 3}>3</CircleTimeline>
        </div>
      </div>
    </header>
  )
}

export default TimelineRegister
