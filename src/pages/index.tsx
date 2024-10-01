import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
 

export default function Home() {
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
        <li>
          <Link href="/List">List</Link>
        </li>
        <li>
          <Link href="/Todo"> todo list</Link>
        </li>
      </ul>
    </nav>
    <h1 style={{textAlign:'center', marginTop:'250px'}}>home page</h1>
  </div>
  );
}
