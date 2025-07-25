'use client';

import { GlobalStyle } from '@/styles/global';
import Header from './Header'; // your existing header

export default function LayoutWrapper({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
}
