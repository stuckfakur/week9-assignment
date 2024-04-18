interface LineTimelineProps {
  currentStep: boolean
}

const LineTimeline: React.FC<LineTimelineProps> = ({ currentStep }) => {
  return (
    <div
      className={`h-4 w-full rounded-md border ${currentStep ? 'bg-teal-600' : 'bg-slate-400'}`}
    ></div>
  )
}

export default LineTimeline
