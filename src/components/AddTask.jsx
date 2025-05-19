import { child, push, serverTimestamp, update } from "firebase/database";
import { assignmentRef } from "../firebase/config";

export function AddTask(){

    let tempTask = '';
    let tempCategory = 'UX';

    function handleSubmit(event){
            event.preventDefault();
            console.log('Task: ', tempTask, ' category: ', tempCategory)

            // const tempTime = serverTimestamp();
            // console.log(tempTime);
    
            if(tempTask) {
                //genererar nytt firebase ID
                const newID = push(assignmentRef).key;
    
                const newRef = child(assignmentRef, newID);
    
                update(newRef, {task: tempTask, category: tempCategory, status: 'new', timestamp: serverTimestamp(), member: ''});
                event.target.reset();
                tempCategory = 'UX';
            }
    
        }
        
    return(

        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task: </label>
                <input onChange={ event => tempTask = event.target.value }type="text" id="task" required/>
                <label htmlFor="category">Category: </label>
                <select name="" id="category" defaultValue="UX" onChange={ event => tempCategory = event.target.value }>
                    <option value="UX">UX</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                </select>
                <button>Add Task</button>
            </form>
        </div>

    )

}