'use client';
import styled from 'styled-components';

const Wrapper = styled.main`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(to bottom, #0f0f0f, #1a001a);
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #b19cd9;
  margin-bottom: 2rem;
`;

const Button = styled.a`
  padding: 1rem 2rem;
  background: #b19cd9;
  color: black;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    background: #d1b3ff;
  }
`;

export default function ResumePage() {
  return (
    <Wrapper>
      <Title>Download My Resume</Title>
      <Button href="/Prem Kumar J - Resume(1) (2).pdf" download>
        📄 Download Resume
      </Button>
    </Wrapper>
  );
}
