"use client"
import React, { useState } from 'react';
import { TextField ,Button} from '@mui/material';
import "./taskScheduler.css"

function taskScheduler({tasks,setTasks}) {
  
  const [taskName, setTaskName] = useState('');
  const [taskHours, setTaskHours] = useState('');
  const [taskMinutes, setTaskMinutes] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (taskName.trim() === '' || taskHours.trim() === '' || taskMinutes.trim() === '') return;
    
    const newTask = {
      name: taskName,
      hours:parseInt(taskHours),
      minutes:parseInt(taskMinutes),
      duration: parseInt(taskHours)*60+parseInt(taskMinutes)
    };

    setTasks([...tasks, newTask]);
    setTaskName('');
    setTaskHours('');
    setTaskMinutes('')
  };

  const clearTask=()=>{
    setTasks([])
  }

  return (
    <div className='taskScheduler'>
      <form onSubmit={addTask}>
      <div>
        <h1 className="taskAdd">Schedule Your Tasks</h1>
        <TextField
          sx={{width:200, marginLeft:"1%"}}
          required
          type="text"
          id="taskName"
          label="Task Name"
          defaultValue=""
          value={taskName}
          onChange={(e)=>setTaskName(e.target.value)}
        />
        <TextField
          sx={{width:70}}
          id="taskHours"
          label="Hours"
          type="number"
          defaultValue="0"
          required
          value={taskHours}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>setTaskHours(e.target.value)}
        />

      <TextField
          sx={{width:70}}
          id="taskMinutes"
          label="Minutes"
          type="number"
          defaultValue="0"
          required
          value={taskMinutes}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>setTaskMinutes(e.target.value)}
        />
        <Button sx={{marginLeft:"2%",marginTop:"2%"}} type="submit" variant="text">Add Task</Button>
      </div>
    </form>
    <div className="taskitem">
            <div className="item1">Name 
                <ul>
                {tasks.map((task, index) => (
                  <li key={index}>
                    {task.name}
                  </li>
                ))}
              </ul>
            
            </div>
            <div className="item2">Hour 
              <ul>
                {tasks.map((task, index) => (
                  <li key={index}>
                    {task.hours}
                  </li>
                ))}
              </ul>
            
            </div>
            <div className="item3">Minute
            
            <ul>
                {tasks.map((task, index) => (
                  <li key={index}>
                    {task.minutes}
                  </li>
                ))}
              </ul></div>
        </div>
  <div className="taskslist">
    
  </div>
  <Button variant="text" onClick={()=>clearTask()}>Clear Tasks</Button>
    </div>
  );
}

export default taskScheduler;