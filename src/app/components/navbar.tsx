import Link from "next/link"


export default function Navbar() {

    return (
      <nav className="bg-slate-50 text-slate-950 text-center gap-5 flex justify-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about/us">About US</Link>
        <Link href="/about/someone">About Someone</Link>
        <Link href="/listofposts">Posts</Link>

      </nav>
    );
}