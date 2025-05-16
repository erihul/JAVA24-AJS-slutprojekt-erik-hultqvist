export function FinishedTask( { id, task, timestamp, category, member} ){


    return(

        <div>
            <p>Task: {task}</p>
            <p>Date added: {timestamp}</p>
            <p>Category: {category}</p>
            <p>Team-Member: {member}</p>
            <button>Ett sätt att radera den</button>
        </div>

    )

}