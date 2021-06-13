import React, { useEffect } from 'react'

export function ToDoHeader(props) {
  const {
    userSpecifiedTodo,
    setUserSpecifiedTodo,
    updateToDoListItem,
    handleSearcKeyDown,
    handleFilter,
    completeAll,
    setCompleteAll,
    todos,
  } = props

  useEffect(() => {
    let filtered = todos.filter((task) => {
      return !task.complete
    })
    if (filtered.length === 0) {
      setCompleteAll('Remove All')
    } else {
      setCompleteAll('Complete All')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos])
  return (
    <div className="mb-4">
      <h1 className="text-gray-darkest text-3xl font-bold">Todo List</h1>
      <button
        style={{ position: 'absolute', right: '31%', top: '5%' }}
        className={`${
          completeAll === 'Complete All'
            ? 'flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-teal-300 border-teal-300 hover:bg-green-700'
            : 'flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700'
        }`}
        onClick={handleFilter}
      >
        {completeAll}
      </button>

      <div className="flex my-8">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-darker"
          placeholder="Add Todo"
          id="input"
          value={userSpecifiedTodo}
          onChange={(event) => setUserSpecifiedTodo(event.target.value)}
          onKeyDown={handleSearcKeyDown}
        />
        <button
          onClick={() => updateToDoListItem()}
          className="flex-no-shrink p-2 border-2 rounded text-teal-700 border-teal-700 hover:text-white hover:bg-teal-700"
        >
          Add
        </button>
      </div>
    </div>
  )
}
