import React, { useState } from 'react'
import Modal from "./modal/modal";

const App = () => {
    const [open, setOpen] = useState(false);

  return (
     <div style={{ padding: "20px" }}>
      <h1>Modal Example</h1>

      <button onClick={() => setOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Hello</h2>
        <p>This is a reusable modal component.</p>
      </Modal>
    </div>
  )
}

export default App
