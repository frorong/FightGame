'use client';
import { Container } from 'app/style';
import Link from 'next/link';

const Info = () => {
  return (
    <Container>
      <h2>게임 규칙</h2>
      <p>~~~~~~~~~~~~~~~~~~~~</p>
      <p>펀치 : P1 Q / P2 I</p>
      <p>발차기 : P1 W / P2 O</p>
      <p>숙이기 : P1 E / P2 P</p>
      <p>~~~~~~~~~~~~~~~~~~~~</p>
      <p>펀치를 숙여서 피할 수 있습니다</p>
      <p>숙여진 상태에선 발차기를 맞습니다</p>
      <p>두 플레이어가 동시에 피하면 서로 머리를 박습니다</p>
      <p>피한 상태에서는 펀치가 불가합니다</p>
      <p>펀치 모션이 보였다면 당신은 이미 죽어있습니다</p>
      <p>Window는 영어 자판으로 플레이 해주세요</p>
      <p>~~~~~~~~~~~~~~~~~~~~</p>
      <Link href="game">게임시작</Link>
    </Container>
  );
};

export default Info;
