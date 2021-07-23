import Task from "./Task"
const Tasks = ({tasks, onDelete}) => {

    return (
        <>
            {tasks.map((task) => {
                return <Task key={task.id} text={task.text} id={task.id} onDelete={onDelete}/>
            })}
        </>
    )
}

export default Tasks
