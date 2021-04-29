import React from 'react'

const CompletedItems = (props) => {
  return(
    <div className="d-flex align-items-center justify-content-between my-2 w-100 border border-secondary p-2 rounded-sm">
      <p className="mb-0 text-secondary"><s>{props.todo.title}</s></p>
      <input 
        type="checkbox" 
      />
    </div>
  )
}

export default CompletedItems
