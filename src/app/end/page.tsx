'use client';
import Link from 'next/link';
import { Container } from 'app/style';
const End = () => {
  return (
    <Container>
      <h1>게임 종료</h1>
      <Link href="/game">다시 시작 하시겠습니까?</Link>
    </Container>
  );
};
export default End;
