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
  return (
    <div>
      <header className={styles.header}>
        <h1>TODO Tracker</h1>
      </header>
      <main className={styles.main}>
        TODO: TODO's
      </main>
    </div>
  );
};

export default App;
