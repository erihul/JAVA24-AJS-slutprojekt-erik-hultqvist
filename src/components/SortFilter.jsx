export function SortFilter(){


    return(
        <div>
            <div>
                <h3>Filter by</h3>
                <label htmlFor="member">Team-Member:</label>
                <select name="" id="member">
                    <option value="">Erik H</option>
                </select>
                <label htmlFor="filterCategory">Category:</label>
                <select name="" id="filterCategory">
                    <option value="UX">UX</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                </select>
            </div>
            <div>
                <label htmlFor="sort"><h3>Sort by:</h3></label>
                <select name="" id="sort">
                    <option value="asc">Oldest first</option>
                    <option value="dec">Newest first</option>
                    <option value="asc">A-Z</option>
                    <option value="dec">Z-A</option>
                </select>
            </div>

        </div>
    )

}