import React, {useState, useEffect} from 'react'
import { getCurrentMilestoneObj } from '../utilities/index';

const DailyTaskButton = ({goal}) => {
    const[dailyTaskDesc, setDailyTaskDesc] = useState();
    
    useEffect(() => {
        const mileObj= getCurrentMilestoneObj(goal.milestones);
        setDailyTaskDesc(mileObj.data.description)
    }, [goal.milestones])
    
    return (
        <div className='taskButton d-flex align-items-center justify-content-center '>
            <span>{dailyTaskDesc}</span>
        </div>
    )
}

export default DailyTaskButton
