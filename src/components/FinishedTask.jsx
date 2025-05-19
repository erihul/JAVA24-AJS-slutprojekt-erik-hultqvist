import { child, remove } from "firebase/database";
import { assignmentRef } from "../firebase/config";

export function FinishedTask( { id, task, timestamp, category, member} ){



    function handleClick(event){
        const taskRef = child(assignmentRef, id);
        
        remove(taskRef)
    }

    return(

        <div className="task">
            <p>Task: {task}</p>
            <p>Date added: {timestamp}</p>
            <p>Category: {category}</p>
            <p>Team-Member: {member}</p>
            <button onClick={handleClick}>Ett sätt att radera den</button>
        </div>

    )

}