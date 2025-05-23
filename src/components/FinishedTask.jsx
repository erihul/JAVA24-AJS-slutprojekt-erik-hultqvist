import { child, remove } from "firebase/database";
import { assignmentRef } from "../firebase/config";

export function FinishedTask( { id, task, timestamp, category, member} ){



    function handleClick(event){
        const taskRef = child(assignmentRef, id);
        
        remove(taskRef)
    }

    return(

        <div className={`task ${category.toLowerCase()}`}>
            <dl>
                <div className="task-field">
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
            <button onClick={handleClick}>Delete</button>
        </div>

    )

}