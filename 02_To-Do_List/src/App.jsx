import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [input, setInput] = useState({
    taskName: '',
    task: '',
    Priority: '',
  })

  ////local storage 
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('todoData')
    return savedData ? JSON.parse(savedData) : []
  })

  const [nextId, setNextId] = useState(() => {
    const savedData = localStorage.getItem('todoData')
    const parsed = savedData ? JSON.parse(savedData) : []
    return parsed.length > 0 ? Math.max(...parsed.map(item => item.id)) + 1 : 1
  })

  const [editId, setEditId] = useState(null)

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(data))
  }, [data])

  ////without local storage
  // const [data, setData] = useState([])
  // const [nextId, setNextId] = useState(1)
  // const [editId, setEditId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!input.taskName || !input.task || !input.Priority) {
      alert("Please fill all fields")
      return
    }

    if (editId !== null) {
      const updateData = data.map((item) => item.id === editId ? { ...item, ...input } : item)
      setData(updateData)
      setEditId(null)
    } else {
      setData([{ ...input, id: nextId }, ...data])
      setNextId(nextId + 1)
    }

    setInput({
      taskName: '',
      task: '',
      Priority: '',
    })
  }

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const handleEdit = (id) => {
    const selectedItem = data.find((item) => item.id === id)
    setInput({
      taskName: selectedItem.taskName,
      task: selectedItem.task,
      Priority: selectedItem.Priority,
    })
    setEditId(id)
  }

  return (
    <div className='container'>
      <h2>ToDo List</h2>

      <div className="form-container">
        <input type="text" className='task-name-input' placeholder='Task Name...' value={input.taskName}
          onChange={(e) => { setInput({ ...input, taskName: e.target.value }) }} />
        <textarea className='task-input' placeholder='Task...' value={input.task}
          onChange={(e) => { setInput({ ...input, task: e.target.value }) }} />

        <select name="importance" id="importance" value={input.Priority}
          onChange={(e) => { setInput({ ...input, Priority: e.target.value }) }}>
          <option value="" disabled>Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <button type='submit' className='submit-btn' onClick={handleSubmit}>{editId !== null ? "Update" : "Submit"}</button>
      </div>

      <div className="table-container">
        {data.length > 0 ? (<table border='1'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task Name</th>
              <th>Task</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.taskName}</td>
                <td>{item.task}</td>
                <td>{item.Priority}</td>
                <td>
                  <button className='edit-btn' type='button' onClick={() => handleEdit(item.id)}>Edit</button>
                  <button className='delete-btn' type='button' onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>) : (<h3 className='empty-headline'>Data not Available</h3>)}
      </div>
    </div>
  )
}

export default App