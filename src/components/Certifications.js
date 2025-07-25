'use client';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #0f0f0f;
  color: white;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #ff3cac;
  text-align: center;
  margin-bottom: 2rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 700px;
  margin: 0 auto;
`;

const Item = styled.li`
  background: #1f1f1f;
  padding: 1.2rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid #333;
`;

export default function Certifications() {
  return (
    <Section id="certifications">
      <Title>Certifications</Title>
      <List>
        <Item>
          <strong>UI/UX Design - Great Learning</strong><br />
          Completed hands-on certification using Figma and user research tools.
        </Item>
        <Item>
          <strong>Java Programming - NPTEL</strong><br />
          Scored 75% and gained in-depth knowledge of Java fundamentals.
        </Item>
        <Item>
          <strong>Soft Skills - TCS iON</strong><br />
          Completed professional training in communication, attitude, and team work.
        </Item>
      </List>
    </Section>
  );
}
