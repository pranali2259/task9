'use client';
import {useEffect,useReducer} from 'react'
import Link from "next/link";

interface State {
    Running: boolean;
    time: number;
  }
  
  interface Action {
    type: 'start' | 'stop' | 'reset' | 'count';
  }
  
  const initialState: State = {
    Running: false,
    time: 0,
  };
  
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'start':
        return { ...state, Running: true };
      case 'stop':
        return { ...state, Running: false };
      case 'reset':
        return { Running: false, time: 0 };
      case 'count':
        return { ...state, time: state.time + 1 };
      default:
        return state;
    }
  };
  
  const Stopwatch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { Running, time } = state;
  
    useEffect(() => {
      let timer:NodeJS.Timeout;
      if (Running) {
        timer = setInterval(() => {
          dispatch({ type: 'count' });
        }, 1000);
      }
      return () => clearInterval(timer);
    }, [Running]);
  
    return (
    <div> 
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
      </ul>
    </nav>
    </div>
    <h1 style={{textAlign:'center', marginTop:'250px'}}>Stopwatch</h1>
    <div style={{textAlign:'center',  marginBottom:'250px'}}>
        
        <p>{time} seconds</p>
        <button onClick={() => dispatch({ type: 'start' })} disabled={Running}>
          Start
        </button>
        <button onClick={() => dispatch({ type: 'stop' })} disabled={!Running}>
          Stop
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </div>
      </div>
    );
  };
  
  export default Stopwatch;