'use client';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121212;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;

  a {
    color: white;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: #ff3cac;
    }
  }
`;

const Email = styled.a`
  color: #aaa;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    color: #ff3cac;
  }
`;

export default function Header() {
  return (
    <Nav>
      <h2 style={{ color: 'white' }}>Prem Kumar J</h2>
      <NavList>
        <li><Link href="/">Home </Link></li>
        <li><Link href="/#services">Services </Link></li>
        <li><Link href="/#projects">Projects </Link></li>
        <li><Link href="/#certifications">Certifications </Link></li>
        <li><Link href="/about">About </Link></li>
        <li><a href="/education">Education </a></li>
        <li><Link href="/contact">Contact </Link></li>
        <li><Link href="/resume">Resume</Link></li>
      </NavList>
      <Email href="mailto:premkumar181716@gmail.com">Say hi →</Email>
    </Nav>
  );
}
