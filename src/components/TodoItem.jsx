import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { TodoUpdate } from './TodoUpdate';

export const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        {/* Contenedor de textos con clase condicional */}
        <div className={`todo-text ${todo.done ? 'completed' : ''}`}>
          <h5 
            className="mb-0 fw-bold" 
            style={{ cursor: 'pointer' }} 
            onClick={toggleExpanded}
          >
            {todo.title}
          </h5>
          {isExpanded && (
            <h5 className="mt-2 mb-0 fw-bold text-muted">
              {todo.body}
            </h5>
          )}
        </div>

        <div className="d-flex align-items-center">
          <button 
            onClick={toggleExpanded} 
            className="btn btn-sm btn-outline-primary custom-toggle-btn me-2"
          >
            {isExpanded ? 'Ocultar' : 'Mostrar'} descripción
          </button>
          <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
          <button 
            className="btn btn-sm btn-danger ms-2" 
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <FaTrash />
          </button>
          <span 
            onClick={() => handleCompleteTodo(todo.id)}
            className="ms-3" 
            style={{ cursor: 'pointer' }}
          >
            <label className={`container-done ${todo.done ? 'active' : ''}`}></label>
          </span>
        </div>
      </div>
    </li>
  );
};
