import React from 'react';
import logo from './logo.svg';
import './App.css';

export const SomeComponent = (props) => {
  console.log({ props })
  return <h2 className={props.className}>Just Some Embedded Component</h2>
}
