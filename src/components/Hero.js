'use client';
import styled from 'styled-components';
import Link from 'next/link';

const HeroSection = styled.section`
  padding: 5rem 2rem;
  text-align: center;
  background: radial-gradient(circle, #111, #000);
`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #ccc;
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background: #ff3cac;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #b19cd9;
  }
`;

export default function Hero() {
  return (
    <HeroSection id="hero">
      <Title>HI THERE, I'M PREM KUMAR<br />SOFTWARE DEVELOPER</Title>
      <Subtitle>Innovating Through Code and Design</Subtitle>

      {/* ✅ Now wrapping a <button> inside Link is okay */}
      <Link href="/about">
        <Button>About Me</Button>
      </Link>
    </HeroSection>
  );
}
