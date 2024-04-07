import Head from "next/head";
import Image from "next/image";
import { useEffect,useState } from "react";
import OneTask from "./oneTask";

function shuffleArray(array) {
    // Create a copy of the original array
    const shuffledArray = [...array];
  
    // Shuffle the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
}

export default function ScheduleDisplay({tasks, schedule, setSchedule}) {
    const scheduleTasks = ()=>{
        var tempschedule =[]
        var tempScheduleWithBreak = []
        for (const task of tasks){
            const duration = task.duration
            const repeat = Math.floor(duration/30)
            const leftover = duration%30
            for(let i = 0; i<repeat; i++){
                const newTask = {
                    name: task.name,
                    minutes:30
                };
                
                tempschedule.push(newTask)
            }
            if (leftover!=0){
                const newTask = {
                    name: task.name,
                    minutes:leftover
                };
                tempschedule.push(newTask)
            }
        }

        tempschedule = shuffleArray(tempschedule)

        for (const task of tempschedule){
            tempScheduleWithBreak.push(task)
            const water = {
                name: "Water Break!",
                minutes:1
            };

            const closingEyes = {
                name: "Closing Eyes Break!",
                minutes:2
            };

            const stretching = {
                name: "Stretch!",
                minutes:1
            };

            const message = {
                name: "Write an encouraging message!",
                minutes:1
            };
            tempScheduleWithBreak.push(water)
            tempScheduleWithBreak.push(closingEyes)
            tempScheduleWithBreak.push(stretching)
            tempScheduleWithBreak.push(message)

        }
        setSchedule(tempScheduleWithBreak)

    }
    useEffect(()=>{
        scheduleTasks()
    },[])

  return (
    <div>
        {schedule.map(task => <OneTask task={task}/>)}

        
    </div>

  );
}
