import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <h1><Link href="/">Superhero Searcher</Link></h1>
    </header>
  );
}