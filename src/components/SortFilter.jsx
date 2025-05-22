import { useEffect, useState } from "react";
import { membersRef } from "../firebase/config"
import { onValue } from "firebase/database";

export function SortFilter( {setMemberFilter, setCategoryFilter, setSort} ){

    const [members, setMembers] = useState([])

    useEffect(()=>{
    onValue(membersRef, snapshot => {
        setMembers(Object.entries(snapshot.val()).map(([id, obj])=> {return{id, ...obj}} ));
    });
    }, [])

    return(
        <div className="sortFilterContainer">
            <div>
                <h3>Filter by</h3>
                <label htmlFor="member">Team-Member:</label>
                <select name="" id="member" onChange={event => setMemberFilter(event.target.value)}>
                    <option value="all">ALL</option>
                    {members.map(member => <option key={member.id} value={member.name}>{member.name}</option>)}
                </select>
                <label htmlFor="filterCategory">Category:</label>
                <select name="" id="filterCategory" onChange={event => setCategoryFilter(event.target.value)}>
                    <option value="all" >ALL</option>
                    <option value="UX" >UX</option>
                    <option value="Frontend" >Frontend</option>
                    <option value="Backend" >Backend</option>
                </select>
            </div>
            <div>
                <label htmlFor="sort"><h3>Sort by:</h3></label>
                <select name="" id="sort" onChange={event => setSort(event.target.value)}>
                    <option value="ascTime">Oldest first</option>
                    <option value="decTime">Newest first</option>
                    <option value="ascLetter">A-Z</option>
                    <option value="decLetter">Z-A</option>
                </select>
            </div>

        </div>
    )

}