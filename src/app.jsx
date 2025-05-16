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

    useEffect(()=>{
        onValue(assignmentRef, snapshot => {
            console.log(snapshot.val());
            setTasks(Object.entries(snapshot.val()).map(([id, obj])=> {return{id, ...obj}} ));
        });
        onValue(membersRef, snapshot => {
            console.log(snapshot.val());;
        });

    },[])

    const newTasks = tasks.filter(task => task.status === 'new');
    const inProgressTasks = tasks.filter(task => task.status === 'inprogress');
    const finishedTasks = tasks.filter(task => task.status === 'finished');

    return(
        <div>
            <h1>Scrum Board(under development)</h1>
            <AddMember/>
            <AddTask/>
            <SortFilter/>
            <h2>New</h2>
            {newTasks.map(({id, task, timestamp, category}) => <NewTask key={id} id={id} task={task} timestamp={timestamp} category={category}/>)}
            {/* <NewTask tasks={newTasks}/> */}

            <h2>In Progress</h2>
            {inProgressTasks.map(({id, task, timestamp, category, member}) => <InProgressTask key={id} id={id} task={task} timestamp={timestamp} category={category} member={member}/>)}
            {/* <InProgressTask/> */}

            <h2>Finished</h2>
            {finishedTasks.map(({id, task, timestamp, category, member}) => <FinishedTask key={id} id={id} task={task} timestamp={timestamp} category={category} member={member}/>)}
            {/* <FinishedTask/> */}
        </div>
    )
}

const root = createRoot ( document.querySelector('#root') );

root.render(<App/>)