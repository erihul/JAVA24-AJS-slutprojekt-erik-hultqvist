import { child, push, update } from "firebase/database";
import { membersRef } from "../firebase/config";

export function AddMember(){

    let tempMember = '';
    let tempRole = '';


    function handleSubmit(event){
        event.preventDefault();
        console.log('Name: ', tempMember, ' Role: ', tempRole)

        if(tempMember) {
            //genererar nytt firebase ID
            const newID = push(membersRef).key;

            const newRef = child(membersRef, newID);

            update(newRef, {name: tempMember, category: tempRole});
            event.target.reset();
        }

    }

    return(
        <div>
            <h2>Add Team-Member</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input onChange={ event => tempMember = event.target.value }type="text" id="name" required/>
                <label htmlFor="role">Role: </label>
                <select name="" id="role" onChange={ event => tempRole = event.target.value }>
                    <option value="UX">UX</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                </select>
                <button>Add Team-Member</button>
            </form>
        </div>
        
    )

}