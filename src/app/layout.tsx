'use client';
import './globals.css';
import Head from 'next/head';
import { css } from '@emotion/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <title>GFC</title>
      <link
        rel="icon"
        href="https://i.esdrop.com/d/f/8XM3vYGLJd/MoBCviSrdX.png"
      />
      <body
        css={css`
          background-size: contain;
          background-image: url('https://min-inter.co.kr/wp-content/uploads/2023/04/image-170-1024x574.png');
        `}
      >
        {children}
      </body>
    </html>
  );
}
