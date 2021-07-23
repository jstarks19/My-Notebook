import { useState } from 'react'






const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert("Add Task");
            return;
        }

        onAdd(text);
        setText('');
    }
    
    
    
    return (
        <form action="" className="add-form" onSubmit={onSubmit}>
            <label htmlFor="task-name">Task Name</label><br />
            <input 
                type="text" 
                name="task-name" 
                id="task-name" 
                placeholder="task-name"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                /><br />
            <input type="submit" value="Save Task" />
        </form>
    )
}

export default AddTask
