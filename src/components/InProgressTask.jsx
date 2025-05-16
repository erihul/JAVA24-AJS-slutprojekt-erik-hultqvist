export function InProgressTask( { id, task, timestamp, category, member} ){


    return(

        <div>
            <p>Task: {task}</p>
            <p>Date added: {timestamp}</p>
            <p>Category: {category}</p>
            <p>Team-Member: {member}</p>
            <button>Markera att den är utförd</button>
        </div>

    )

}