const Task = (props) => {
    return (
        <div key={props.id}>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    )
}

export default Task