'use client';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #121212;
  padding: 1rem 2rem;
  text-align: center;
  color: #aaa;
  font-size: 0.9rem;
  margin-top: 4rem;
`;

const Link = styled.a`
  color: #b19cd9;
  margin: 0 0.5rem;

  &:hover {
    color: #d1b3ff;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>© {new Date().getFullYear()} Prem Kumar J | Connect: 
        <Link href="mailto:premkumar181716@gmail.com">Email</Link>
        <Link href="https://github.com/PREM1808" target="_blank">GitHub</Link>
        <Link href="https://www.linkedin.com/in/prem-kumar-j-566a26292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">LinkedIn</Link>
      </p>
    </FooterWrapper>
  );
}
