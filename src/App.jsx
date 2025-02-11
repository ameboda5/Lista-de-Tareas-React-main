import './App.css';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';

function App() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h1 className="mb-0">Lista de Tareas</h1>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-6">
              <h3>
                N° Tareas:{' '}
                <span className="badge bg-info text-dark">{todosCount}</span>
              </h3>
            </div>
            <div className="col-6 text-end">
              <h3>
                Pendientes:{' '}
                <span className="badge bg-warning text-dark">
                  {pendingTodosCount}
                </span>
              </h3>
            </div>
          </div>

          <div className="mb-4">
            <h3>Agregar Tarea</h3>
            <TodoAdd handleNewTodo={handleNewTodo} />
          </div>

          <TodoList
            todos={todos}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
