'use client';

import './globals.css';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import MockServiceWorkerProvider from '@mocks/provider/MockServiceWorkerProvider';
import StyledComponentsRegistry from '@styles/StyledComponentsRegistry';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <MockServiceWorkerProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </StyledComponentsRegistry>
        </MockServiceWorkerProvider>
      </body>
    </html>
  );
}
