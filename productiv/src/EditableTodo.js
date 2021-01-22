import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 * 
 * State:
 * - isEditing: true/false
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({todo, update, remove}) {
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit(evt) {
    setIsEditing(isEditing => !isEditing);
  }

  /** Call remove fn passed to this. */
  function handleDelete(evt) {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    toggleEdit();
    update({...formData, id: todo.id});
  }

  const nonEditToDo = (
      <div className="mb-3">
      <div className="float-right text-sm-right">
        <button
            className="EditableTodo-toggle btn-link btn btn-sm"
            onClick={toggleEdit}>
          Edit
        </button>
        <button
            className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
            onClick={handleDelete}>
          Del
        </button>
      </div>
      <Todo todo={todo} toggleComplete={update}/>
    </div>
    );

  return (
      <div className="EditableTodo">
                {isEditing 
                  ? <TodoForm initialFormData={todo} handleSave={handleSave}/>
                  : nonEditToDo
                }
      </div>
  );
}

export default EditableTodo;
