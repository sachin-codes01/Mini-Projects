import React, { useState } from 'react'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const data = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building UI."
    },
    {
      question: "What is useState?",
      answer: "It lets you store state in a function."
    },
    {
      question: "What is Vite?",
      answer: "It is a fast development tool."
    }
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }


  return (
    <div className="accordion">
      <h1 className="title">FAQ Accordion</h1>

      {data.map((item, index) => (
        <div key={index} className="accordion-item">

          <div className="accordion-header" onClick={() => toggle(index)}>
            <h3>{item.question}</h3>
            <span className="icon">{activeIndex === index ? '-' : '+'}</span>
          </div>

          {activeIndex === index && (<p className="accordion-content">{item.answer}</p>)}

        </div>
      ))}
    </div>
  )
}

export default Accordion
