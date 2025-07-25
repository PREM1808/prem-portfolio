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
  background-color: #1e1e1e;
  padding: 2rem;
  width: 300px;
  border-radius: 12px;
  text-align: left;
  transition: all 0.3s ease;
  border: 1px solid #2a2a2a;
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

export default function Services() {
  return (
    <Section id="services">
      <Title>What I Do</Title>
      <Grid>

        <Card>
          <CardTitle>UI/UX Design</CardTitle>
          <CardDesc>
            Certified by Great Learning. Experienced in designing user-centric mobile app interfaces using Figma and wireframes with usability testing.
          </CardDesc>
        </Card>

        <Card>
          <CardTitle>Communication & Problem Solving</CardTitle>
          <CardDesc>
            Strong communicator and team collaborator. 1st Prize in Creative Writing and active participant in SDG challenges and leadership activities.
          </CardDesc>
        </Card>

        <Card>
          <CardTitle>Web & Programming Skills</CardTitle>
          <CardDesc>
            Skilled in Python, Java, and C programming fundamentals. Passionate about building responsive, modern web apps using React and Next.js.
          </CardDesc>
        </Card>

      </Grid>
    </Section>
  );
}
