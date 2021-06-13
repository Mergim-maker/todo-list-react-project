import React, { useState } from 'react'
import { Todo } from './Todo'
import { ToDoHeader } from './ToDoHeader'

export function TodoList(props) {

  const [listOfTodos, setListOfTodos] = useState(props.todos)
  const [userSpecifiedTodo, setUserSpecifiedTodo] = useState('')
  const [completeAll, setCompleteAll] = useState('Complete All')

  const updateToDoListItem = () => {
    const newItem = {
      content: userSpecifiedTodo,
      complete: false,
      date_created: Date.now(),
      date_due: Date.now(),
    }
    let copy = [...listOfTodos];
    copy = [...copy, newItem];
    setListOfTodos(copy)
  }

  const handleSearcKeyDown = async (event) => {
    if (event.key === 'Enter') {
      const newItem = {
        content: userSpecifiedTodo,
        complete: false,
        date_created: Date.now(),
        date_due: Date.now(),
      }
      let copy = [...listOfTodos];
      copy = [...copy, newItem];
      setListOfTodos(copy)
    }
  }

  const changeTodoState = (element) => {
    let mapped = listOfTodos.map(task => {
      return task.content === element.content ? { ...task, complete: !task.complete } : { ...task};
    });
    setListOfTodos(mapped)
  }

  const removeTodoItem = (element) => {
    let removeItem = listOfTodos.filter(task => {
      if (element.content !== task.content) {
        return task
      }
    });
    setListOfTodos(removeItem);
  }

  const handleFilter = () => {
    if (completeAll == 'Remove All') {
      setListOfTodos([]);
      setCompleteAll("Complete All")
    } else {
      let setAllTasksToTrue = listOfTodos.map(task => {
        return { ...task, complete: true };
      });
      setListOfTodos(setAllTasksToTrue);
    }

  }


  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-2/5">
        <ToDoHeader
          handleFilter={handleFilter}
          userSpecifiedTod={userSpecifiedTodo}
          setUserSpecifiedTodo={setUserSpecifiedTodo}
          updateToDoListItem={updateToDoListItem}
          handleSearcKeyDown={handleSearcKeyDown}
          completeAll={completeAll}
          setCompleteAll={setCompleteAll}
          todos={listOfTodos}
        />
        <Todo
          todos={listOfTodos}
          removeTodoItem={removeTodoItem}
          changeTodoState={changeTodoState}
          setListOfTodos={setListOfTodos}
        />
      </div>
    </div>
  )
}
