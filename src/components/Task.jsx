const Task = (props) => {
    return (
        <div key={props.id} className='task'
        style={{backgroundColor: props.completed ? 'green' : 'white'}}>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.completeTask(props.id)} className='complete'>Complete</button>
            <button onClick={() => props.deleteTask(props.id)} className='delete'>X</button>
        </div>
    )
}

export default Task