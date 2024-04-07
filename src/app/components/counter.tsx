import ReactCountdownClock from "react-countdown-clock"
export default function Timer({minutes, nextTask}) {
    return (
        <ReactCountdownClock
            seconds={minutes*60}
            color="#B27399"
            alpha={0.9}
            size={300}
            onComplete={nextTask}
        />
          
    );
  }
  