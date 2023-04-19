import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import './timer.scss';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';


const Timer = ({timeEnd}) => {
    
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (time < 20) {
                setTime(time => time + 1);
            } else {
                timeEnd();
            }
        }, 1000);
        return () => {clearInterval(timer)}
    }, [time])

    return (
        <div className="timer">
            <CircularProgressbar 
                        value={time} 
                        maxValue={30}
                        strokeWidth={0.3}
                        styles={buildStyles({
                            pathTransitionDuration: 1,
                            trailColor: 'rgba(0,0,0,0)',
                            pathColor: `rgba(229, 164, 255, 0.6)`
                            
                        })}/>
        </div>
    )
} 

export default Timer;