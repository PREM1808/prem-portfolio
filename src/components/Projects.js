'use client';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #121212;
  color: white;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ff3cac;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Card = styled.div`
  background-color: #1f1f1f;
  padding: 2rem;
  width: 300px;
  border-radius: 12px;
  border: 1px solid #333;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 60, 172, 0.2);

  &:hover {
    transform: translateY(-6px);
    border-color: #ff3cac;
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 1rem;
  color: #ff3cac;
  font-size: 1.4rem;
`;

const CardDesc = styled.p`
  color: #ccc;
  font-size: 1rem;
  line-height: 1.6;
`;

export default function Projects() {
  return (
    <Section id="projects">
      <Title>Selected Projects</Title>
      <Grid>

        <Card>
          <CardTitle>MediConnect</CardTitle>
          <CardDesc>
            A mobile healthcare app connecting patients with doctors. Designed using Figma with user-centered wireframes for hospital and emergency workflows.
          </CardDesc>
        </Card>

        <Card>
          <CardTitle>Money Management Web App</CardTitle>
          <CardDesc>
            Built a budget tracking web app using React. Integrated Firebase for user authentication and real-time storage.
          </CardDesc>
        </Card>

        <Card>
          <CardTitle>Course App UI (Design)</CardTitle>
          <CardDesc>
            Designed a visually appealing learning platform UI using Figma. Included course cards, progress tracking, and testimonial sections.
          </CardDesc>
        </Card>

      </Grid>
    </Section>
  );
}
