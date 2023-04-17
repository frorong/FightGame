'use client';
import { Container } from 'app/style';

const Game = () => {
  return (
    <Container>
      <p>게임 규칙</p>
      <p>~~~~~~~~~~~~~~~~~~~~</p>
      <p>펀치 : P1 Q / P2 I</p>
      <p>숙이기 : P1 W / P2 O</p>
      <p>발차기 : P1 E / P2 P</p>
      <p>발차기 : P1 E / P2 P</p>
      <p>~~~~~~~~~~~~~~~~~~~~</p>
      <p>펀치를 숙여서 피할 수 있습니다</p>
      <p>숙여진 상태에선 발차기를 맞습니다</p>
      <p>각 기술의 쿨타임은 1초 입니다</p>
      <p>~~~~~~~~~~~~~~~~~~~~</p>
    </Container>
  );
};

export default Game;
