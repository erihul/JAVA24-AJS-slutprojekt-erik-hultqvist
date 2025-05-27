// AddTask.jsx
// Renders a form that collects the task and category (UX, Backend, Frontend).
// When the form is submitted, it generates a unique Firebase ID and saves the task, selected category, 
// default status (new), current server timestamp, and empty member field to the Firebase Realtime Database. 
 
import { child, push, serverTimestamp, update } from "firebase/database";
import { assignmentRef } from "../firebase/config";

export function AddTask(){

    let tempTask = '';
    let tempCategory = '';

    function handleSubmit(event){
            event.preventDefault();
            console.log('Task: ', tempTask, ' category: ', tempCategory)
    
            if(tempTask && tempCategory) {
                // Generate new firebase-ID
                const newID = push(assignmentRef).key;
                const newRef = child(assignmentRef, newID);
                update(newRef, {task: tempTask, category: tempCategory, status: 'new', timestamp: serverTimestamp(), member: ''});
                event.target.reset();
            }
        }
     
    return(
        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="addTaskForm">
                    <div>
                        <label htmlFor="task">Task: </label>
                        <textarea onChange={ event => tempTask = event.target.value } name="" id="task" cols={33} rows={2} required/>
                    </div>
                    <div className="taskCategoryBtn">
                        <label htmlFor="category">Category: </label>
                        <select name="" id="category" onChange={ event => tempCategory = event.target.value } required>
                            <option value="">SELECT CATEGORY</option>
                            <option value="UX">UX</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                        </select>
                        <div className="box-2">
                            <button className="btn btn-one">
                                <span>ADD TASK</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )

}