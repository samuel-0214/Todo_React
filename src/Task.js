export const Task = (props) => {
    return (
    <div className='task'
    style={{backgroundColor: props.completed ? "green" : "white"}}>
        <h2>{props.taskName}</h2>
        <button onClick={() => props.comButton(props.id)}> Complete </button>
        <button className='x' onClick={() => props.deleteTask(props.id)}>x</button>
        </div>
        )
}