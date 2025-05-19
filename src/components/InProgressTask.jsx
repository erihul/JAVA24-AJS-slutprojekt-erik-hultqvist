import { child, update } from "firebase/database";
import { assignmentRef } from "../firebase/config";

export function InProgressTask( { id, task, timestamp, category, member} ){


    function handleClick(event){
        const taskRef = child(assignmentRef, id);
        
                    update(taskRef, { status: 'finished' })
    }

    return(

        <div className="task">
            <p>Task: {task}</p>
            <p>Date added: {timestamp}</p>
            <p>Category: {category}</p>
            <p>Team-Member: {member}</p>
            <button onClick={handleClick}>Markera att den är utförd</button>
        </div>

    )

}