import React, { useState } from 'react'
import axios from 'axios'

const TodoForm = () => {
  const [title, setTitle] = useState('')

  const onSubmit = () => {
    if(title.length > 0){
      axios.post('/todo/', 
        {title: title},
        {headers: {token: localStorage.getItem('token')}})
        .then(res => setTitle(''))
    }    
  }

  return(
    <div className="d-flex justify-content-between mt-3 customwidth">
      <input
        className="rounded-lg border border-info p2 w-75" 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        className="bg-primary border-0 py-2 px-3 text-white rounded-lg font-weight-bolder"
        onClick={() => onSubmit()}
      ><i className="bi bi-plus-circle mr-1"></i> Add</button>
    </div>
  )
}

export default TodoForm
