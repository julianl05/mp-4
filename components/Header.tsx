import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <h1>Superhero Powerstats Generator</h1>
      <nav className="p-2 m-4">
        <Link href="/">
          Home
        </Link>
      </nav>
    </header>
  );
}