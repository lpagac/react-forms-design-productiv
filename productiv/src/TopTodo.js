import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  // lowest-priority # is the highest priority
  let top = Infinity;
  let winner;
  for (let todo of todos) {
    if (!todo.isComplete && todo.priority < top) {
      top = todo.priority;
      winner = todo;
    }
  }

  return <Todo todo={winner}/>;
}

export default TopTodo;