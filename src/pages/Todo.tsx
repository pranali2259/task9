'use client';
import React, { useReducer, useState } from 'react';
import Link from "next/link";
interface State {
  srno: number | '';
  work: string;
  status:string;
}

interface Action {
  type: 'setsrno' | 'setwork' | 'setstatus';
  payload: number | string;
}

const initialState: State = {
  srno: '',
  work: '',
  status:''
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setsrno':
      return { ...state, srno: Number(action.payload) };  
    case 'setwork':
      return { ...state, work: action.payload as string };
    case 'setstatus':
      return { ...state, status: action.payload as string  };  
    default:
      return state;
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState<Array<State>>([]);

  const addTodo = () => {
    if (state.srno && state.work  ) {  
       
       
      dispatch({ type: 'setsrno', payload: 0 });
      dispatch({ type: 'setwork', payload: '' });
      dispatch({ type: 'setstatus', payload:''});
      setTodo([...todo, { ...state }]);
    }
  };

  const removeTodo = (index: number) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  return (
    <> 
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
    <div>
      <div style={{ textAlign: 'center',marginTop:'250px', marginBottom: '250px' }}>
        <input
          type="text"
          placeholder="srno"
          value={state.srno}
          onChange={(e) => dispatch({ type: 'setsrno', payload: e.target.value })}
        />
        <input
          type="text"
          placeholder="work"
          value={state.work}
          onChange={(e) => dispatch({ type: 'setwork', payload: e.target.value })}
        />
        <input
          type="text"
          placeholder='status'
          value={state.status}
          onChange={(e) => dispatch({ type: 'setstatus', payload: e.target.value})}
        />
        
        <button onClick={addTodo}>Add Item</button>
        <h4>List</h4>
        <ul style={{ display: "flex", flexDirection: "column" }}>
          {todo.map((list, index) => (
            <li key={index}>
              {list.srno} - {list.work} - {list.status}
              <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default Todo;