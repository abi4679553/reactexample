import React from 'react'

const Form = () => {
  return (
    <div>
        <p className='text-3xl text-blue-700 text-center '>From </p>
   
    <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)}
        />

        <button onClick={() =>alert("this is entered !!")}>sumbit</button>
    </div>
  )
}

export default Form