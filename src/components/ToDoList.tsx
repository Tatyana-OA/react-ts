import React from 'react'

// Interface describing the type of props received
interface TodoListProps {
    items: {id: string, text: string}[]
}

const ToDoList: React.FC<TodoListProps> = ({items}) => { // referring to the interface

  return (
    <ul>
        {items.map(t => (
            <li key={t.id}>
                {t.text}
            </li>
        ))}
    </ul>
  )
}

export default ToDoList