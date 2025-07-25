'use client';
import styled from 'styled-components';

const Wrapper = styled.main`
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #0a0a0a, #1a001a);
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #b19cd9;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background-color: #1f1f1f;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  border: 1px solid #333;
`;

const CardTitle = styled.h2`
  color: #d1b3ff;
`;

const CardDesc = styled.p`
  color: #ccc;
`;

export default function ProjectsPage() {
  return (
    <Wrapper>
      <Title>My Projects</Title>

      <Card>
        <CardTitle>MediConnect</CardTitle>
        <CardDesc>
          A mobile healthcare app that connects patients with doctors. Designed using Figma with user-centric wireframes and intuitive emergency UI flows.
        </CardDesc>
      </Card>

      <Card>
        <CardTitle>Money Manager Web App</CardTitle>
        <CardDesc>
          Built with React and Firebase for real-time tracking of user expenses and authentication. Simple UI for budgeting and history tracking.
        </CardDesc>
      </Card>

      <Card>
        <CardTitle>Course App UI Design</CardTitle>
        <CardDesc>
          A Figma-based learning platform design. Includes responsive layouts, course cards, progress bars, and testimonial sections.
        </CardDesc>
      </Card>
    </Wrapper>
  );
}
