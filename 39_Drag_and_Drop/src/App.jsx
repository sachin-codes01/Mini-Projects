import { useState } from 'react'
import './App.css'

const App = () => {
  const [div1, setDiv1] = useState(['React', 'CSS', 'Javascript', 'Html'])
  const [div2, setDiv2] = useState(['Database', 'MongoDB', 'NextJS'])
  const [div3, setDiv3] = useState(['MaterialUI', 'Typescript', 'TalwindCSS'])

  const [input, setInput] = useState('')
  const [dragItem, setDragItem] = useState(null)

  const addInput = () => {
    setDiv1([...div1, input])
    setInput('')
  }

  const handleStart = (item, divID) => {
    setDragItem({ item, divID })
  }

  const handleBox = (targetID) => {
    if (!dragItem) return

    const { item, divID } = dragItem

    if (divID === targetID) return

    if (divID === 'div1') {
      setDiv1(div1.filter((i) => i !== item))
    }
    if (divID === 'div2') {
      setDiv2(div2.filter((i) => i !== item))
    }
    if (divID === 'div3') {
      setDiv3(div3.filter((i) => i !== item))
    }


    if (targetID === 'div1') {
      setDiv1([...div1, item])
    }
    if (targetID === 'div2') {
      setDiv2([...div2, item])
    }
    if (targetID === 'div3') {
      setDiv3([...div3, item])
    }

  }

  const handleDelete = () => {
    if (!dragItem) return

    const { item, divID } = dragItem

    if (divID === 'div1') {
      setDiv1(div1.filter((i) => i !== item))
    }
    if (divID === 'div2') {
      setDiv2(div2.filter((i) => i !== item))
    }
    if (divID === 'div3') {
      setDiv3(div3.filter((i) => i !== item))
    }

    setDragItem(null)
  }


  return (
    <div className='container'>

      <div className="input-div">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='button' onClick={addInput}>Submit</button>
      </div>

      <div className="innerbox">

        <div className="div1 box" onDragOver={(e) => e.preventDefault()} onDrop={() => handleBox('div1')}><h3>TodoList</h3>
          {div1.map((item, index) => (<div key={index} className="box1 text" draggable onDragStart={() => handleStart(item, 'div1')}>{item}</div>))}
        </div>

        <div className="div2 box" onDragOver={(e) => e.preventDefault()} onDrop={() => handleBox('div2')}><h3>Progress</h3>
          {div2.map((item, index) => (<div key={index} className="box2 text" draggable onDragStart={() => handleStart(item, 'div2')}>{item}</div>))}
        </div>

        <div className="div3 box" onDragOver={(e) => e.preventDefault()} onDrop={() => handleBox('div3')}><h3>Completed</h3>
          {div3.map((item, index) => (<div key={index} className="box3 text" draggable onDragStart={() => handleStart(item, 'div3')}>{item}</div>))}
        </div>

      </div>

      <div className="bin" onDragOver={(e) => e.preventDefault()} onDrop={handleDelete}>
        <img src="/bin.png" alt="bin" />
      </div>

    </div>
  )
}

export default App