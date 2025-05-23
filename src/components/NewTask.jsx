import { child, onValue, update } from "firebase/database";
import { useEffect, useState } from "react";
import { assignmentRef, membersRef } from "../firebase/config";

export function NewTask( { id, task, timestamp, category} ){
    
    const [members, setMembers] = useState([]);

    // useEffect(()=>{
    //         onValue(assignmentRef, snapshot => {
    //             console.log(snapshot.val());
    //             setTasks(Object.entries(snapshot.val()).map(([id, obj])=> {return{id, ...obj}} ));
    //         });
    //         onValue(membersRef, snapshot => {
    //             console.log(snapshot.val());
    //             setMembers(Object.entries(snapshot.val()).map(([id, obj])=> {return{id, ...obj}} ));
    //         });
    
    //     },[])

    //  set member to the useState that corresponds to the actual tasks category
        useEffect(() => {
        onValue(membersRef, snapshot => {
            const data = snapshot.val();
            if (data) {
            const filteredMembers = Object.entries(data)
                .map(([id, obj]) => ({ id, ...obj }))
                .filter(member => Array.isArray(member.role) && member.role.includes(category));

            console.log("Filtered members:", filteredMembers);
            setMembers(filteredMembers);
            }
        });
        }, [category]);

        // Add a team-member to an existing "new task"
        function handleChange(event){
            const selectedMember = event.target.value;
            const taskRef = child(assignmentRef, id);

            update(taskRef, { member: selectedMember, status: 'inprogress' })
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
            </dl>
            <form action="">
                <label htmlFor="">Assign task</label>
                <select name="" id="" onChange={handleChange}>
                     <option value="">Select Team-member</option>
                     {/* {newTasks.map(({id, task, timestamp, category}) => <NewTask key={id} id={id} task={task} timestamp={timestamp} category={category}/>)} */}
                    {members.map(({id, name}) => <option key={id} value={name}>{name}</option>)}
                </select>
            </form>
        </div>
    )

}