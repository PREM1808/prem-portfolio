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

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Item = styled.li`
  margin-bottom: 1rem;
`;

export default function AboutPage() {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <Section>
        <p>
          I’m Prem Kumar J, a passionate software developer with a strong foundation in UI/UX design, problem-solving, and full-stack development. I aim to build intuitive and impactful applications through clean design and modern code.
        </p>
      </Section>

      <Title>Achievements</Title>
      <Section as="ul">
        <Item>🏆 First Prize in Creative Writing – Hindustan Institute</Item>
        <Item>🌍 SDG Innovation Challenge – Active Participant</Item>
        <Item>🎓 Certified in UI/UX Design by Great Learning</Item>
        <Item>💻 Completed Java Programming Certification by NPTEL</Item>
      </Section>
    </Wrapper>
  );
}
