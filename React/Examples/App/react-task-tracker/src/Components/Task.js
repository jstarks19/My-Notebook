import { FaTimes } from 'react-icons/fa'

const Task = ({text, id, onDelete}) => {
    return (
        <div className="task" >
            <h3 >{text} 
            <FaTimes style={{color:"red", cursor:"pointer"}} onClick={()=>onDelete(id)}/> </h3>
        </div>
    )
}

export default Task
