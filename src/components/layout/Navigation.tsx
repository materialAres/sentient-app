import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-blue-400 p-2 border border-blue-600">
      <Link href="/" className="nav-button">Home</Link>
      <Link href="/gratefulness-not-found" className="nav-button">Feeling Grateful</Link>
      <Link href="/about" className="nav-button">About Us</Link>
    </nav>
  )
}