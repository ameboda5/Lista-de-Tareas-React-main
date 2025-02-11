import React, { useEffect, useRef } from 'react';
import { useForm } from '../hooks/useForm';
import { TaskService } from '../infrastructure/TaskService';

export const TodoAdd = ({ handleNewTodo }) => {
  const service = new TaskService();
  // Usamos un ref para evitar que se ejecute la carga de datos más de una vez
  const hasFetched = useRef(false);

  const { name, body, onInputChange, onResetForm } = useForm({
    name: '',
    body: '',
  });

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    // Solo carga desde la API si no hay tareas guardadas en localStorage
    if (!storedTodos || storedTodos.length === 0) {
      service.getTask().then((resp) => {
        // Suponemos que resp es un arreglo de objetos
        const tasks = resp.map((task) => ({
          id: task.id,         // Usamos el id único
          title: task.name,    // Convertimos "name" a "title"
          body: task.body,
          done: false,
        }));
        tasks.forEach((task) => handleNewTodo(task));
      });
    }
  }, [handleNewTodo, service]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(), // id temporal
      title: name,
      body,
      done: false,
    };

    service.postTask(newTodo).then((resp) => {
      // Actualizamos el id con el que retorna la API, si es necesario
      const addedTodo = {
        ...newTodo,
        id: resp.id,
      };
      handleNewTodo(addedTodo);
      onResetForm();
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input-add"
        name="name"
        value={name}
        onChange={onInputChange}
        placeholder="Título de la tarea"
      />

      <textarea
        className="input-add"
        name="body"
        value={body}
        onChange={onInputChange}
        placeholder="Descripción de la tarea"
      ></textarea>

      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
};
