"use client"
import ReactCountdownClock from "react-countdown-clock"
import Top from "./components/top";
import { MessageButton } from "./components/messageButton";
import TaskScheduler from "./components/taskScheduler";
import ScheduleDisplay from "./components/scheduleDisplay";
import React, { useState } from 'react';
import { Button } from "@mui/material";
import DoingTask from "./components/doingTasks";
import MessagePopup from "./components/messagePopup";
import "./page.css"

export default function Home() {
  const [scheduled, setScheduled] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [schedule,setSchedule] = useState([])

  return (
    <div>
      <Top/>

      {scheduled ? <div className="displaySchedule"><ScheduleDisplay tasks={tasks} schedule={schedule} setSchedule={setSchedule}/> <DoingTask tasks={schedule} setTasks={setSchedule}/></div> :
      <div className="scheduler"><ReactCountdownClock
      seconds={0}
      color="#B27399"
      alpha={0.9}
      size={300}
  /><TaskScheduler tasks={tasks} setTasks={setTasks}/></div> }

      <Button onClick={()=>{setScheduled(true)}}>Schedule</Button>
      <MessageButton/>
      <MessagePopup/>
    </div>
  );
}
