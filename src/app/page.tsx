'use client';
import Image from 'next/image';
import * as S from 'app/style';
import Link from 'next/link';

export default function Home() {
  return (
    <S.Container>
      <h2>복싱 게임에 오신것을 환영합니다.</h2>
      <Link href="info">게임 설명 보기</Link>
    </S.Container>
  );
}
