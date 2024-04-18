import './App.css'

function App() {
  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-start-1 bg-blue-600">test</div>
        <div className="col-span-10 col-start-2 bg-red-600">test</div>
        <div className="col-start-12 bg-teal-600">test</div>
      </div>
    </>
  )
}

export default App
