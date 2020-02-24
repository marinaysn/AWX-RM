import React from 'react'

function Hello() {
  return (
    <div style={{fontSize: Math.random() < 0.5 ? '120%' : '80%'}}>
      <p style={{color: Math.random() < 0.5 ? 'green' : 'blue' }}>Hello Anna!!!</p>
    </div>
  )
}

export default Hello
