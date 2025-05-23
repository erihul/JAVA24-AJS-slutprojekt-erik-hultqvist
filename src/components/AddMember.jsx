import { child, push, update } from "firebase/database";
import { membersRef } from "../firebase/config";

export function AddMember(){

    let tempMember = '';
    let tempRole = [];


    function handleSubmit(event){
        event.preventDefault();
        console.log('Name: ', tempMember, ' Role: ', tempRole)

        if(tempMember && tempRole.length > 0) {
            //genererar nytt firebase ID
            const newID = push(membersRef).key;

            const newRef = child(membersRef, newID);

            update(newRef, {name: tempMember, role: tempRole});
            event.target.reset();
            tempRole = [];
        } else {
            alert('Please fill in Name and Role')
        }

    }

    return(
        <div>
            <h2>Add Team-Member</h2>
            <form onSubmit={handleSubmit}>
                <div className="addTeamForm">
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={ event => tempMember = event.target.value }type="text" id="name" required/>
                    
                        <br />
                        <label htmlFor="role">Role: </label>
                        <br />
                        <input className="checkBox" type="checkbox" id="role" value="UX" onChange={ event => {
                            if (event.target.checked) {
                                tempRole.push(event.target.value);
                            } else {
                                tempRole = tempRole.filter(role => role !== event.target.value);
                            }
                        }}
                        /> UX <div className="uxCircle circle"></div>
                        <br />
                        <input className="checkBox" type="checkbox" id="role" value="Backend" onChange={ event => {
                            if (event.target.checked) {
                                tempRole.push(event.target.value);
                            } else {
                                tempRole = tempRole.filter(role => role !== event.target.value);
                            }
                        }}
                        /> Backend <div className="backendCircle circle"></div>
                        <br />
                        <input className="checkBox" type="checkbox" id="role" value="Frontend" onChange={ event => {
                            if (event.target.checked) {
                                tempRole.push(event.target.value);
                            } else {
                                tempRole = tempRole.filter(role => role !== event.target.value);
                            }
                        }}
                        /> Frontend <div className="frontendCircle circle"></div>
                        <br />
                    </div>

                    {/* <select name="" id="role" defaultValue="UX" onChange={ event => tempRole = event.target.value }>
                        <option value="UX">UX</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        </select> */}

                    <div className="addTeamBtn">
                        <button>Add<br />Team Member</button>
                    </div>

                </div>
            </form>
        </div>
        
    )

}