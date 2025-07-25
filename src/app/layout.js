import { StyledComponentsRegistry } from '@/lib/StyledComponentsRegistry';
import GlobalStylesWrapper from '@/components/GlobalStyles';

export const metadata = {
  title: 'Prem Portfolio',
  description: 'Built with Next.js 14 and styled-components',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStylesWrapper>
            {children}
          </GlobalStylesWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
