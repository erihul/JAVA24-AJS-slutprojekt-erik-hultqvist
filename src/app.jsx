import { createRoot } from "react-dom/client";
import { AddMember } from "./components/AddMember";
import { AddTask } from "./components/AddTask";
import { SortFilter } from "./components/SortFilter";
import { NewTask } from "./components/NewTask";
import { InProgressTask } from "./components/InProgressTask";
import { FinishedTask } from "./components/FinishedTask";
import { useEffect, useState } from "react";
import { assignmentRef, membersRef } from "./firebase/config";
import { onValue } from "firebase/database";

function App() {

    const [tasks, setTasks] = useState([])
    const [memberFilter, setMemberFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sort, setSort] = useState('');

    useEffect(()=>{
        onValue(assignmentRef, snapshot => {
            console.log(snapshot.val());
            setTasks(Object.entries(snapshot.val()).map(([id, obj])=> {return{id, ...obj}} ));
        });
        // onValue(membersRef, snapshot => {
        //     console.log(snapshot.val());;
        // });

    },[])

    const memberFilteredTasks = tasks.filter(task =>{
        if(memberFilter === 'all') return true;
        else return task.member === memberFilter;
    });

    const categoryFilteredTasks = memberFilteredTasks.filter(task =>{
        if(categoryFilter === 'all') return true;
        else return task.category === categoryFilter;
    })

    const sortedTasks = categoryFilteredTasks.toSorted( (a, b) =>{
        if(sort === 'ascLetter') return a.task.toLowerCase() > b.task.toLowerCase() ? 1 : -1;
        if(sort === 'decLetter') return a.task.toLowerCase() > b.task.toLowerCase() ? -1 : 1;
        if(sort === 'decTime') return a.timestamp < b.timestamp;
        if(sort === 'ascTime') return b.timestamp < a.timestamp;
        else return 0;
    })

    const newTasks = sortedTasks.filter(task => task.status === 'new');
    const inProgressTasks = sortedTasks.filter(task => task.status === 'inprogress');
    const finishedTasks = sortedTasks.filter(task => task.status === 'finished');
    console.log('finishedtasks: ', finishedTasks);

    // Format timestamp when reading from DB
        function formatTimestamp(timestamp) {
            const date = new Date(timestamp);

            const yy = String(date.getFullYear()).slice(2);
            const mm = String(date.getMonth() + 1).padStart(2, '0');
            const dd = String(date.getDate()).padStart(2, '0');
            const hh = String(date.getHours()).padStart(2, '0');
            const min = String(date.getMinutes()).padStart(2, '0');

            return `${yy}-${mm}-${dd} ${hh}:${min}`;
        }

    return(
        <div>
            <h1>SCRUM BOARD [under development...]</h1>
            <div className="addContainer">
                <AddMember/>
                <AddTask/>
            </div>
            <SortFilter setMemberFilter={setMemberFilter} setCategoryFilter={setCategoryFilter} setSort={setSort}/>
            <div className="taskContainer">                
                <div className="newContainer">
                    <h2>New</h2>
                    {newTasks.map(({id, task, timestamp, category}) => <NewTask key={id} id={id} task={task} timestamp={formatTimestamp(timestamp)} category={category}/>)}
                    {/* <NewTask tasks={newTasks}/> */}
                </div>

                <div className="inPContainer">
                    <h2>In Progress</h2>
                    {inProgressTasks.map(({id, task, timestamp, category, member}) => <InProgressTask key={id} id={id} task={task} timestamp={formatTimestamp(timestamp)} category={category} member={member}/>)}
                    {/* <InProgressTask/> */}
                </div>

                <div className="finishedContainer">
                    <h2>Finished</h2>
                    {finishedTasks.map(({id, task, timestamp, category, member}) => <FinishedTask key={id} id={id} task={task} timestamp={formatTimestamp(timestamp)} category={category} member={member}/>)}
                    {/* <FinishedTask/> */}
                </div>
            </div>
        </div>
    )
}

const root = createRoot ( document.querySelector('#root') );

root.render(<App/>)