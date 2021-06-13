import React from 'react'

export function TodoItem(props) {
  const { element, changeTodoState, removeTodoItem} = props
  return (
    <React.Fragment>
      <div className="flex mb-4 items-center justify-between">
        <div>
          <div
            className={`flex-grow ${
              element.complete ? 'line-through' : ''
            } text-gray-darkest`}
          >
            {element.content}
          </div>
        </div>
        <div>
          <button
            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-700 border-green-700 hover:bg-green-700"
            onClick={() => changeTodoState(element)}
          >
            {element.complete ? "Complete":"Not Complete" }
          </button>
          <button
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
            onClick={() => removeTodoItem(element)}
          >
            Remove
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
