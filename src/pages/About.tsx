import React from 'react'

import Link from "next/link";

const About = () => {
  return (
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
    <h1 style={{textAlign:'center', marginTop:'250px'}}>About page</h1>
    </div>
  )
}

export default About