import React , {useState} from 'react'

const TodoApp = () => {

    const [tasks , setTasks] = useState([]) // Add  and store a new task
    const [task , setTask] = useState('') // 
     const  [editIndex , setEditIndex] = useState(null)
  


    const addTask = () =>{
        if(task.trim()){
            setTasks([...tasks , task])
            setTask('');
        }
        
    }

    const  editTask = (index) =>{
        setTask(tasks[index]); 
        setEditIndex(index);
    }
const saveTasks = () =>{
    if(task.trim()){
        const updatedTask = tasks.map((t , index) =>
             index ===editIndex ? task : t 
            )
             setTask(updatedTask);
             setTask(' ')
             setEditIndex(null)
        
    }
}

    const removeTask = (index) =>{
        const newTask = tasks.filter((_ , i )=> i !== index);
        setTasks(newTask)
    }
  return (
    <div>
        <div>
            <h1>Todo App</h1>
            <div>
                <input type = 'text' placeholder = 'Enter Your To-do'  value = {task} onChange = {(e) => setTask(e.target.value)}/>
                <button  onClick = {editIndex !== null ? saveTasks :addTask}>
                    {editIndex !== null ? 'Save' : "Add"}
                </button>
            </div>
             
          
            <ul>
                {Array.isArray(tasks) && tasks.map ((task, index) =>(
                    <li key = {index}>
                        <span>{task}</span>
                        <button onClick={removeTask}>Remove</button>
                        <button onClick = {() => editTask(index)}>Edit</button>
                    </li>
                ))}
               
             </ul>
         
        </div>
    </div>
  )
}

export default TodoApp