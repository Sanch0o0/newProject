import React from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';

function App() {

  let a: string = '10';
  a = 'fd';
  const name: string = 'sasha';
  let isTrue: boolean | null = null;
  isTrue = true;

  let names: Array<string> = ['sasha', 'dimych', 'zhorych'];
  console.log(names[0].toLowerCase());
  names.map(n => {
    console.log(n)
  })

  let sex: 'male' | 'female' = 'female'
  let num: 12 | 20 = 12;

  type UserType = {
    name: string,
    surname: string,
    age: number,
    aboutMe: boolean | string,
    sayHello: (message: string) => void,
    adress?: AdressType | null,
  }

  type AdressType = {
    city: string | null,
    country?: string | null,
  }

  let user: UserType = {
    name: 'Sasha',
    surname: 'Modnikov',
    age: 22,
    aboutMe: true,
    sayHello: (message: string) => { console.log(message) },
    adress: {
      city: 'Minsk',
      country: 'Belarus',
    }
  }

  let InitialState = {
    name: null as string | null,
    surname: null as string | null,
    age: null as number | null,
    aboutMe: null as boolean | null,
    adress: {
      city: null,
      country: null,
    } as AdressType
  }

  type InitialStateType = typeof InitialState;

  let state: InitialStateType = {
    name: 'sasha',
    surname: 'modnikov',
    age: 22,
    aboutMe: true,
    adress: {
      city: 'Minsk',
      country: 'Belarus',
    }
  }

  const sum: (a: number, b: number) => number = (a: number, b: number) => {
    return a + b;
  }

  sum(10, 20)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
