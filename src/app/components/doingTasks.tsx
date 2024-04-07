import { useEffect,useState } from "react";
import {Button} from "@mui/material";
import Counter from "./counter";


export default function DoingTask({tasks, setTasks}) {

    const [start, setStart] = useState(false)
    const [counterKey, setCounterKey] = useState(0);

    const nextTask=()=>{
        if (0 < tasks.length){
            setCounterKey(counterKey + 1); // Update the counter key
            deleteFirst()
        }

    }
    const deleteFirst=()=>{
        const newArray = tasks.slice(1); // Delete the first item
        setTasks(newArray); // Update the state with the new array

    }

    useEffect(() => {
        if (tasks.length > 0) {
          setStart(true);
        }
      }, [tasks]);
    return (
        
        <div>
            {(tasks.length > 0) && ( <div>
            <h1>{tasks[0].name}</h1>
            <h1>{tasks[0].minutes}</h1>
            <Counter key={counterKey} minutes={tasks[0].minutes} nextTask={nextTask} />
          </div>
        
         )}
        </div>
       
    );
  }
  