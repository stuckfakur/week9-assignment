interface CircleTimelineProps {
  currentStep: boolean
  children: string
}
const CircleTimeline: React.FC<CircleTimelineProps> = ({ currentStep, children }) => {
  return <div className={`flex aspect-square w-16 items-center justify-center rounded-full shadow ${currentStep ? 'bg-teal-400' : 'bg-slate-400'}`}>{children}</div>
}

export default CircleTimeline
