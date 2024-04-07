import "./taskScheduler.css"
export default function OneSchedulerTask({taskName, hour,minute}) {

    return (
        <div className="taskitem">
            <div className="item1">{taskName} </div>
            <div className="item2">{hour} </div>
            <div className="item3">{minute}</div>
        </div>
       
    );
  }
  