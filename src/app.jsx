import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { createStore } from 'redux';

const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(toggleTodo(todoBefore)).toEqual(todoAfter);
}


// //////

testToggleTodo();

console.log('All tests passed.');
