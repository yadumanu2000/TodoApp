import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: initialTodosList,
    }
  }

  handleDeleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }))
  }

  render() {
    const {todos} = this.state

    return (
      <div className="main-container">
        <h1>Simple Todos</h1>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={this.handleDeleteTodo}
          />
        ))}
      </div>
    )
  }
}

export default SimpleTodo
