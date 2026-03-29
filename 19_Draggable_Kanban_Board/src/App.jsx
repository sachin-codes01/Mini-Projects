import React, { useReducer, useState, useEffect } from 'react'
import './App.css'

const initialState = {
  todo: [],
  inProgress: [],
  done: [],
}

function reducer(state, action) {
  if (action.type === 'ADD_TASK') {
    return { ...state, [action.column]: [action.task, ...state[action.column]] }

  } else if (action.type === 'DELETE_TASK') {
    return { ...state, [action.column]: state[action.column].filter((_, i) => i !== action.index) }

  } else if (action.type === 'EDIT_TASK') {
    const updated = [...state[action.column]]
    updated[action.index] = action.task
    return { ...state, [action.column]: updated }

  } else if (action.type === 'MOVE_TASK') {
    const { from, to, task } = action
    if (from === to) return state
    return { ...state, [from]: state[from].filter((t) => t !== task), [to]: [task, ...state[to]] }

  } else {
    return state
  }
}

const Column = ({ title, columnKey, tasks, dispatch }) => {
  const [input, setInput] = useState('')
  const [editIndex, setEditIndex] = useState(null)

  const handleAdd = () => {
    if (!input.trim()) return

    if (editIndex !== null) {
      dispatch({ type: 'EDIT_TASK', column: columnKey, index: editIndex, task: input })
      setEditIndex(null)
    } else {
      dispatch({ type: 'ADD_TASK', column: columnKey, task: input })
    }
    setInput('')
  }

  const handleEdit = (task, index) => {
    setInput(task)
    setEditIndex(index)
  }

  const handleDrop = (e) => {
    const task = JSON.parse(e.dataTransfer.getData('task'))
    const from = e.dataTransfer.getData('from')
    dispatch({ type: 'MOVE_TASK', from, to: columnKey, task })
  }

  return (
    <div className="column" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} >
      <h2>{title}</h2>

      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Add task..." />

      <button onClick={handleAdd}>{editIndex !== null ? 'Update' : 'Add'}</button>

      {tasks.map((task, index) => (
        <div className="card" key={index} draggable onDragStart={(e) => {
          e.dataTransfer.setData('task', JSON.stringify(task))
          e.dataTransfer.setData('from', columnKey)
        }}>

          <span>{task}</span>

          <div className="actions">
            <button onClick={() => handleEdit(task, index)}>✏️</button>
            <button onClick={() => dispatch({ type: 'DELETE_TASK', column: columnKey, index })}>❌</button>
          </div>
        </div>
      ))}
    </div>
  )
}

const App = () => {
  const [tasks, dispatch] = useReducer(reducer, initialState, () => {
    const saved = localStorage.getItem('kanban-tasks')
    return saved ? JSON.parse(saved) : initialState
  })

  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div>
      <h1>Kanban Board</h1>
      <div className="board">
        <Column title="Todo" columnKey="todo" tasks={tasks.todo} dispatch={dispatch} />
        <Column title="In Progress" columnKey="inProgress" tasks={tasks.inProgress} dispatch={dispatch} />
        <Column title="Done" columnKey="done" tasks={tasks.done} dispatch={dispatch} />
      </div>
    </div>
  )
}

export default App