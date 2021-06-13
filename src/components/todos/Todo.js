import React, { useState, useEffect } from 'react'
import { TodoItem } from './ToDoItem'

export function Todo(props) {
  const { changeTodoState, removeTodoItem, todos } = props
  return (
    <React.Fragment>
      {todos.length > 0 &&
        todos.map((element) => {
          return (
            <TodoItem
              changeTodoState={changeTodoState}
              element={element}
              removeTodoItem={removeTodoItem}
            />
          )
        })}
    </React.Fragment>
  )
}
