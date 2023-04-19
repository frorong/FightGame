'use client';
import './globals.css';
import Head from 'next/head';
import Image from 'next/image';
import BackBoxer from 'img/BackBoxer.png';
import { css } from '@emotion/react';
import Glub from 'img/Glub.png';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <title>GFC</title>
      <Head>
        <meta property="og:title" content="Every GSM" key="title" />
        <link rel="icon" href={Glub} />
      </Head>
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
