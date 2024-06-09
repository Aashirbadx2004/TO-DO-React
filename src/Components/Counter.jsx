import React from 'react'
import CircularProgressBar from './CircularProgressBar'

function Counter({Taskdone,allTask}) {
  const task = allTask
  const completedTask = Taskdone
  const completionPercentage = task === 0 ? 0 : (completedTask / task) * 100;
  return (
    <> 
    <div className=' outline-none  '>
        
       <div className=' outline-none select-none '>

        <CircularProgressBar percentage={completionPercentage} task={task}  completedtask={completedTask}    />
      </div> 
      
    </div>
    </>
  )
}

export default Counter
