'use client';

import './globals.css';
import React from 'react';
import StyledComponentsRegistry from '@styles/registry';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';
import { ThemeProvider } from 'styled-components';

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
