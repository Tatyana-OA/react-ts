import React from 'react'

// Interface describing the type of props received
interface TodoListProps {
    items: {id: string, text: string}[];
    onDeleteTodo: (id:string) => void
}

const ToDoList: React.FC<TodoListProps> = ({items, onDeleteTodo}) => { // referring to the interface

  return (
    <ul>
        {items.map(t => (
            <li key={t.id}>
                <span>{t.text}</span>
                <button onClick={onDeleteTodo.bind(null, t.id)}>DELETE</button>
            </li>
        ))}
    </ul>
  )
}

export default ToDoList