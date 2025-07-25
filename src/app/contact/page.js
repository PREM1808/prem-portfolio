'use client';
import styled from 'styled-components';

const Wrapper = styled.main`
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #000000, #1a001a);
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #b19cd9;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #555;
  background: #1f1f1f;
  color: white;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  height: 120px;
  border-radius: 6px;
  border: 1px solid #555;
  background: #1f1f1f;
  color: white;
`;

const Button = styled.button`
  padding: 0.9rem;
  border: none;
  border-radius: 6px;
  background: #b19cd9;
  color: black;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #d1b3ff;
  }
`;

export default function ContactPage() {
  return (
    <Wrapper>
      <Title>Contact Me</Title>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </Form>
    </Wrapper>
  );
}
