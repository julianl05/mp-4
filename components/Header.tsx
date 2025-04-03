import Link from 'next/link';
// import styled from 'styled-components';

// const StyledHeader = styled.header`
//   background-color: #333;
//   color: white;
//   padding: 1rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const StyledH1 = styled.h1`
//   font-size: calc(10px + 2vmin);
//   margin: 0;
// `

export default function Header() {
  return (
    <header className="text-[calc(10px+2vmin)] bg-[#222831] text-white p-[2vh] flex justify-between items-center border-b-4 border-[#535C91]">
      <h1 className='text-bold mx-[4vw] my-[2vh]'>CS391 Superhero Searcher</h1>
      <nav>
        <Link className="mx-[4vw] my-[vh] hover:underline hover:text-[#EEEEEE] "href="/">
          Home
        </Link>
      </nav>
    </header>
  );
}