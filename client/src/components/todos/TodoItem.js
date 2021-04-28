import React from 'react'

const TodoItem = (props) => {
  return(
    <div className="d-flex align-items-center justify-content-between my-1 customwidth border border-secondary p-2 rounded-sm">
      <p className="mb-0 font-weight-bolder">{props.todo.title}</p>
      <input type="checkbox" />
    </div>
  )
}

export default TodoItem
