'use client';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: #0f0f0f;
  color: white;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #b19cd9;
  text-align: center;
  margin-bottom: 3rem;
`;

const Timeline = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
`;

const Entry = styled.li`
  background: #1a1a1a;
  border: 1px solid #333;
  border-left: 5px solid #b19cd9;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 8px;
`;

const Degree = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #d1b3ff;
`;

const Institution = styled.p`
  margin: 0.2rem 0;
  font-weight: 500;
`;

const Period = styled.p`
  font-size: 0.9rem;
  color: #aaa;
`;

export default function EducationContent() {
  return (
    <Section>
      <Title>Education</Title>
      <Timeline>
        <Entry>
          <Degree>B.E. Computer Science and Engineering</Degree>
          <Institution>KCG College of Technology, Chennai</Institution>
          <p>CGPA: 7.92</p>
          <Period>2022 – Present</Period>
        </Entry>
        <Entry>
          <Degree>Higher Secondary Certificate (HSC)</Degree>
          <Institution>BKMHSS, Kelambakkam, Tamil Nadu</Institution>
          <p>Percentage: 93.16%</p>
          <Period>2021 – 2022</Period>
        </Entry>
        <Entry>
          <Degree>Secondary School Leaving Certificate (SSLC)</Degree>
          <Institution>BKMHSS, Kelambakkam, Tamil Nadu</Institution>
          <p>Percentage: 93.4%</p>
          <Period>2019 – 2020</Period>
        </Entry>
      </Timeline>
    </Section>
  );
}
