import React, { useState } from 'react'


const IdInput = ({idObj, setData, startTest}) => {

  // console.log(startTest, setData)

    const {id, setId} = idObj
    
    
  return (
    <div>
        <label htmlFor="id">Vector Id</label>
        <input type="text" placeholder='Enter Id' onChange={(e)=>setId(e.target.value)} value={id}/>
        <button onClick={startTest} disabled={!id}>Start Test</button>
    </div>
  )
}

export default IdInput