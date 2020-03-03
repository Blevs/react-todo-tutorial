import React, { useState } from 'react';
import styles from './App.module.scss';

const cn = (...classNames) => classNames.filter(x => x).join(' ');

// These are some sample TODO's so you don't have to add some every time the
// page refreshes
// This is only a sample of what this data could look like. Feel free to play
// around with it.
const initialTodos = [
  {
    id: 1,
    title: 'Go grocery shopping',
    done: false,
  },
  {
    id: 2,
    title: 'Be more humble',
    done: true,
  },
  {
    id: 3,
    title: 'Walk the dog',
    done: false,
  },
];

const App = () => {
  const [todosArray, setTodosArray] = useState(initialTodos);
  const [todoText, setTodoText] = useState('');

  const toggleTodo = (id) => {
    setTodosArray(todosArray.map(t => {
      return t.id === id ? { ...t, done: !t.done } : t;
    }));
  };

  const addTodo = () => {
    if (todoText.trim() !== '') {
      setTodosArray([
        ...todosArray,
        { id: Date.now(), title: todoText, done: false }
      ]);
      setTodoText('');
    }
  };

  const clearDone = () => {
    setTodosArray(todosArray.filter(todo => !todo.done));
  };

  return (
    <div>
      <header className={styles.header}>
        <h1>TODO Tracker</h1>
      </header>
      <main className={styles.main}>
        <form
          className={styles.todoForm}
          onSubmit={e => {
            e.preventDefault();
            addTodo();
          }}
        >
          <input
            name="todo"
            placeholder="Write your todo..."
            className={styles.todoInput}
            value={todoText}
            onChange={event => setTodoText(event.target.value)}
          />
          <button type="submit" className={styles.add}>
            Add
          </button>
          <button
            type="button"
            className={styles.clear}
            onClick={clearDone}
          >
            Clear
          </button>
        </form>
        <TodoList>
          {todosArray.map(todo => (
            <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
          ))}
        </TodoList>
      </main>
    </div>
  );
};

const TodoList = ({ children }) => {
  return (
    <div className={styles.todoList}>
      {children}
    </div>
  );
};

const Todo = ({ todo, toggleTodo }) => {
  return (
    <div
      key={todo.id}
      className={cn(styles.todo, todo.done && styles.done)}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.title}
    </div>
  );
};

export default App;
