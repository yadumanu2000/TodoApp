// Write your code here
// eslint-disable-next-line no-unused-vars
import {Component} from 'react'
import './index.css'

const TodoItem = ({todo, onDelete}) => {
  const {id, title} = todo

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <div>
      <p>{title}</p>
      <button type="button" onClick={handleDelete} className="btn">
        Delete
      </button>
    </div>
  )
}

export default TodoItem
