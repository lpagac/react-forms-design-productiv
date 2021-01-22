import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, 
 *                title, 
 *                description, 
 *                priority, 
 *                isComplete, 
 *                toggleComplete(method to mark todo as completed) }
 *
 * { EditableTodo, TodoApp } -> Todo
 **/

function Todo(props) {
  const {id, title, description, priority } = props.todo;

  function handleComplete(evt) {
    props.todo.isComplete = !props.todo.isComplete;
    props.toggleComplete(props.todo);
  }

  const styles = {
    textDecoration: props.todo.isComplete ? "line-through" : "none"
  }

  return (
      <div id={id} className="Todo">
        <div><b style={styles} onClick={handleComplete}>{title}</b> <small>(priority: {priority})</small></div>
        <div><small>{description}</small></div>
      </div>
  );
}

export default Todo;
