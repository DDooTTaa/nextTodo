'use client';

import { useState } from 'react';
import Head from 'next/head';
import styles from './home.css';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setNewTodo('');
    }
  };

  const updateTodo = (index, newValue) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newValue;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
      <div className={styles.container}>
        <Head>
          <title>Todo App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className={styles.title}>Todo리스트</h1>

        <div className={styles.formContainer}>
          <input
              type="text"
              placeholder="입력해주세요"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className={styles.input}
          />
          <button onClick={addTodo} className={styles.button}>
            추가
          </button>
        </div>

        <ul className={styles.todoList}>
          {todos.map((todo, index) => (
              <li key={index} className={styles.todoItem}>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => updateTodo(index, e.target.value)}
                    className={styles.todoInput}
                />
                <button onClick={() => deleteTodo(index)} className={styles.deleteButton}>
                  삭제
                </button>
              </li>
          ))}
        </ul>
      </div>
  );
}