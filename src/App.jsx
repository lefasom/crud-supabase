import { useEffect, useState } from 'react'
import './App.css'
import { supabase } from './supabaseClient'
function App() {
  const [tabla, setTabla] = useState([])
  const [info, setInfo] = useState({})
  const [task, setTask] = useState("")

  const getTask = async ()=> {
    try {
      const { data } = await supabase
        .from("tasks")
        .select("*")
      setTabla(data)
      console.log(data)
    } catch (error) {
        console.log(error);
    }
  }
  const createTask = async ()=> {
    try {
        await supabase
        .from("tasks")
        .insert({
          task: task,
        })
        .single()
      getTask()
      setTask("")
    } catch (error) {
        console.log(error);
    }

  }
  const relation = async ({id})=> {
    try {
      const { data } = await supabase
        .from("tasks_info")
        .select('*')
        .eq("id_tarea",id)
      setInfo(data)
    } catch (error) {
      console.log(error);

    }
  }
  const deleteTask = async ({id})=> {
    try {
      await supabase
        .from("tasks")
        .delete()
        .eq("id", id)
        getTask()
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(()=>{
    getTask()
  },[])

  return (
    <>
    <pre>
      {JSON.stringify(info)}
    </pre>
    <div className="formulario">
      <input type="text" placeholder='tareas..' value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={createTask}>
        Crear
      </button>
    </div>
    <table>
    <thead>
        <tr>
            <th>Tarea</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
    {tabla?.map((val)=>{
      return(
        <tr key={val.id}>
            <td>{val.task}</td>
            <td>
              <button onClick={()=>deleteTask({id:val.id})}>x</button>
              <button onClick={()=>relation({id:val.id})}>ver</button>
            </td>
        </tr>
    )})}  
        
    </tbody>
</table>
    </>
  )
}

export default App
