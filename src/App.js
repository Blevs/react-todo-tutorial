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

  const toggleTodo = (todo) => {
    setTodosArray(todosArray.map(t => {
      return t.id === todo.id ? { ...t, done: !t.done } : t;
    }));
  };

  const addTodo = (text) => {
    if (text !== '') {
      setTodosArray([{
        id: Date.now(),
        title: text,
        done: false,
      }, ...todosArray]); 
    }
  };

  return (
    <div>
      <header className={styles.header}>
        <h1>TODO Tracker</h1>
      </header>
      <main className={styles.main}>
        <TodoForm addTodo={addTodo} />
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
    <div className="todoList">
      {children}
    </div>
  );
};

const Todo = ({ todo, toggleTodo }) => {
  return (
    <div
      key={todo.id}
      className={cn(styles.todo, todo.done && styles.done)}
      onClick={() => toggleTodo(todo)}
    >
      {todo.title}
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  return (
    <form
      className={styles.todoForm}
      onSubmit={event => {
        event.preventDefault();
        addTodo(todoText);
        setTodoText('');
      }}>
      <input
        className={styles.todoInput}
        name="todo"
        value={todoText}
        onChange={event => {
          setTodoText(event.target.value);
        }}
      />
      <button type="submit"
              className={styles.add}
      >
        Add
      </button>
    </form>
  );
};

export default App;
