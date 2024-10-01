"use client";  
import Link from "next/link";
import React, { useState } from 'react';

const Counter=() => {
   
  const [count, setCount] = useState<number>(0);  

  const  increment = () => {
    setCount(count + 1);
  };

  const  decrement = () => {
    setCount(count - 1);
  };

  const  reset = () => {
    setCount(0);  
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
      </ul>
    </nav>
    <h1 style={{textAlign:'center',marginTop:'100px'}}>counter</h1>
    </div>
    <div style={{textAlign:'center',  marginBottom:'250px'}}>
      <h1>{count}</h1>
      <button onClick={ increment}>+</button>
      <button onClick={ reset}>Reset</button>
      <button onClick={decrement}>-</button>
    </div>
    </>
  );
};

export default Counter;