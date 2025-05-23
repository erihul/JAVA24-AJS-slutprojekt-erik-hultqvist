import { child, push, serverTimestamp, update } from "firebase/database";
import { assignmentRef } from "../firebase/config";

export function AddTask(){

    let tempTask = '';
    let tempCategory = '';

    function handleSubmit(event){
            event.preventDefault();
            console.log('Task: ', tempTask, ' category: ', tempCategory)

            // const tempTime = new Date().serverTimestamp().toLocaleString;
            // console.log(tempTime);
    
            if(tempTask && tempCategory) {
                //genererar nytt firebase ID
                const newID = push(assignmentRef).key;
    
                const newRef = child(assignmentRef, newID);
    
                update(newRef, {task: tempTask, category: tempCategory, status: 'new', timestamp: serverTimestamp(), member: ''});
                event.target.reset();
                // tempCategory = 'UX';
            }
        }
        
    return(

        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="task">Task: </label>
                        <textarea onChange={ event => tempTask = event.target.value } name="" id="task" cols={33} rows={2} required/>
                    </div>
                    
                    {/* <input onChange={ event => tempTask = event.target.value }type="text" id="task" required/> */}

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