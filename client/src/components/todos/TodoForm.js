import React from 'react'

const TodoForm = () => {
  return(
    <div className="d-flex justify-content-between mt-3 customwidth">
      <input
        className="rounded-lg border border-info p2 w-75" 
        type="text" 
      />

      <button
        className="bg-primary border-0 py-2 px-3 text-white rounded-lg font-weight-bolder"
      ><i className="bi bi-plus-circle mr-1"></i> Add</button>
    </div>
  )
}

export default TodoForm
