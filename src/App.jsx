
import Todolist from './Components/Todolist'



function App() {


  return (
    <>
      <div className="h-screen flex items-center justify-center p-3 ">
        <div className="relative w-full max-w-[485px] min-h-[550px] rounded outline outline-white outline-1 shadow-3xl">
          <div className="absolute inset-0 bg-black/30 blur-md rounded-lg"></div> 
          <div className="relative z-10 p-0">
            <Todolist />

          </div>
        </div>
      </div>
    </>
  )
}

export default App
