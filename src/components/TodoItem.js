import React from 'react'

class TodoItem extends React.Component {
    render() {
        const {todo, getTodo} = this.props

        const handleGetTodo = (e) => {
            getTodo(e.target.id)
        }

        return(
            <div className="container">
                <h1 className="listItem" onClick={handleGetTodo} id={todo.id}>{todo.title}</h1>
                <p>{`${todo.completed}`}</p>
            </div>
        )
    }
}

export default TodoItem