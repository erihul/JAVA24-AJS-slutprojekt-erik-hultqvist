export function NewTask( { id, task, timestamp, category} ){
    

    return(
        <div>
            <p>Task: {task}</p>
            <p>Date added: {timestamp}</p>
            <p>Category: {category}</p>
            <form action="">
                <label htmlFor="">Tilldela till en TeamMEMBER</label>
                <select name="" id="">
                </select>
            </form>
        </div>
    )

}