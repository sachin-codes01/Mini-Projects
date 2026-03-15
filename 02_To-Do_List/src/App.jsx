import { useState } from 'react'
import './App.css'

function App() {
  const [taskName, setTaskName] = useState('')
  const [taskDes, setTaskDes] = useState('')
  const [tasks, setTasks] = useState([])
  const [edit, setEdit] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!taskName || !taskDes) return;

    if (edit !== null) {
      let updateTask = tasks.map((task) => task.id === edit ? { ...task, taskName, taskDes } : task)
      setTasks(updateTask)
      setEdit(null)
    } else {
      let oneData = {
        id: tasks.length + 1,
        taskName: taskName,
        taskDes: taskDes,
        completed: false,
      }

      setTasks(tasks.concat(oneData))
      // setTasks([...tasks,oneData])
    }

    setTaskName('')
    setTaskDes('')
  }

  const handleDelete = (id) => {
    let AfterDelete = tasks.filter(t => t.id !== id)
    setTasks(AfterDelete)
    setTaskName('')
    setTaskDes('')
  }

  const handleUpdate = (id) => {
    let taskEdit = tasks.find(task => task.id === id)
    setTaskName(taskEdit.taskName)
    setTaskDes(taskEdit.taskDes)
    setEdit(id)
  }

  const handleChecked = (id) => {
    let completeChecked = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    setTasks(completeChecked)
  }

  const handleCancel = () => {
    setEdit(null)
    setTaskName('')
    setTaskDes('')
  }

  return (
    <div className="box">
      <div className="container">
        <div className="form-container">
          <h2>ToDo List</h2>

          {/* ---------------- Form ------------------- */}

          <form onSubmit={handleSubmit}>
            <input className='input-1' type="text" placeholder='Enter task name...'
              value={taskName} onChange={(e) => setTaskName(e.target.value)} />

            <textarea className='input-2' placeholder='Enter task...'
              value={taskDes} onChange={(e) => setTaskDes(e.target.value)} style={{
                // width: "400px",
                height: "100px",
                resize: "none",
                padding: "10px",
              }} />

            <div className="form-buttons">
              {edit !== null && <button className='cancelBtn' onClick={handleCancel}>Cancel</button>}
              <button className='submitBtn' type="submit">{edit !== null ? 'Update' : 'Submit'}</button>
            </div>
          </form>
        </div>

        {/* ---------------- Table ------------------- */}

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Done</th>
                <th>Task Name</th>
                <th>Task Description</th>
                <th>Action</th>
              </tr>
            </thead>

            {tasks.length === 0 ? (
              <tr>
                <td colSpan="5">
                  No tasks found. Add a task to get started!
                </td>
              </tr>
            ) : (
              <tbody>{tasks.map((task) => (
                <tr key={task.id} className={task.completed ? 'completed-row' : ''}>
                  <td data-label="ID">{task.id}</td>
                  <td data-label="Done">
                    <input id='checklist' type="checkbox" onChange={() => handleChecked(task.id)} />
                  </td>
                  <td data-label="Task Name"><div className="desc-cell">{task.taskName}</div></td>
                  <td data-label="Description"><div className="desc-cell">{task.taskDes}</div></td>
                  <td data-label="Action">
                    <div className="buttons">
                      <button onClick={() => handleUpdate(task.id)}>Update</button>
                      <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
            )}

          </table>
        </div>
      </div>
    </div>
  )
}

export default App
