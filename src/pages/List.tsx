'use client';
import Link from "next/link";
import React, { useReducer, useState } from 'react';

interface State {
  name: string; 
  id: number | '';  
}

interface Action {
  type: 'changename' |  'changeid';
  payload: string | number;  
}

const initialState: State = { 
  name: '', 
  id: '' 
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'changename':
      return { ...state, name: action.payload as string };
     
    case 'changeid':
      return { ...state, id: action.payload as number | '' };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [lists, setLists] = useState<{ name: string;  id: number }[]>([]);

  const addList = () => {
    if (state.name && state.id) {  
      const newList = {
        name: state.name,
        id: Number(state.id), 
      };

      setLists((prevLists) => [...prevLists, newList]);
      dispatch({ type: 'changename', payload: '' });
      dispatch({ type: 'changeid', payload: '' });
    } else {
      alert('Please fill in all fields.'); 
    }
  };

  return (
    <> 
     <div>
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Counter">Counter</Link>
        </li>
        <li>
          <Link href="/Stopwatch">StopWatch</Link>
        </li>
        <li>
          <Link href="/List">List</Link>
        </li>
      </ul>
    </nav>
    <h1 style={{textAlign:'center', marginTop:'250px'}}>home page</h1>
  </div>
    <h1 style={{textAlign:'center', marginTop:'250px'}}>List</h1>
    <div style={{textAlign:'center',  marginBottom:'250px'}}>
      
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) => dispatch({ type: 'changename', payload: e.target.value })}
      />
      <input
        type="text"
        placeholder="id"
        value={state.id}
        onChange={(e) => dispatch({ type: 'changeid', payload: e.target.value })}
      />
      <button onClick={addList}>Add Item</button>
      <h4>List</h4>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        {lists.map((list, index) => (
          <li key={index}>
            {list.name}    {list.id} 
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Login;

 