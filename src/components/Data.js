import React from 'react'

const Data = ({ input, output }) => {
  return (
    <section className='data'>
      <div>
        <p className="input">{input}</p>
        <p className="output">{output}</p>
      </div>
      <hr/>
    </section>
  )
}

export default Data