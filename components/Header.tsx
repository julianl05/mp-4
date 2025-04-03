"use client";
import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledH1 = styled.h1`
  font-size: calc(10px + 2vmin);
  margin: 0;
`

export default function Header() {
  return (
    <StyledHeader>
      <h1>Superhero Powerstats Generator</h1>
      <nav className="p-2 m-4">
        <Link href="/">
          Home
        </Link>
      </nav>
    </StyledHeader>
  );
}