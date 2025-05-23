import { child, update } from "firebase/database";
import { assignmentRef } from "../firebase/config";

export function InProgressTask( { id, task, timestamp, category, member} ){


    function handleClick(event){
        const taskRef = child(assignmentRef, id);
        
                    update(taskRef, { status: 'finished' })
    }

    return(

        <div className={`task ${category.toLowerCase()}`}>
            <dl>
                <div className="task-field tfTask">
                    <dt>Task:</dt>
                    <dd>{task}</dd>
                </div>
                <div className="task-field">
                    <dt>Date added:</dt>
                    <dd>{timestamp}</dd>
                </div>
                <div className="task-field">
                    <dt>Category:</dt>
                    <dd>{category}</dd>
                </div>
                <div className="task-field">
                    <dt>Team-Member:</dt>
                    <dd>{member}</dd>
                </div>
            </dl>
            <button onClick={handleClick}>Accomplished</button>
        </div>

    )

}