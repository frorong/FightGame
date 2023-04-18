'use client';
import { Container } from 'app/style';
import * as S from './style';
import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

const P1P = () => {
  const [length, setLength] = useState(0);
  const [turn, setTurn] = useState(10);
  useEffect(() => {
    setLength(500);
    setTimeout(() => {
      setLength(10);
    }, 500);
    setInterval(() => {
      setTurn(turn * 269);
    }, 10);
  }, []);
  return (
    <S.Punch
      css={css`
        transform: rotate(${turn}deg);
        width: ${length}px;
      `}
    ></S.Punch>
  );
};

const P2P = () => {
  const [length, setLength] = useState(0);
  const [turn, setTurn] = useState(10);
  useEffect(() => {
    setLength(500);
    setTimeout(() => {
      setLength(10);
    }, 500);
    setInterval(() => {
      setTurn(turn * 200);
    }, 10);
  }, []);
  return (
    <S.Punch
      css={css`
        transform: rotate(${turn}deg);
        width: ${length}px;
        right: ${length - 100}px;
      `}
    ></S.Punch>
  );
};
const P1K = () => {
  const [length, setLength] = useState(0);
  const [turn, setTurn] = useState(10);
  useEffect(() => {
    setLength(500);
    setTimeout(() => {
      setLength(10);
    }, 500);
    setInterval(() => {
      setTurn(turn * 200);
    }, 10);
  }, []);
  return (
    <S.Kick
      css={css`
        /* transform: rotate(${turn}deg); */
        height: ${length}px;
      `}
    ></S.Kick>
  );
};
const P2K = () => {
  const [length, setLength] = useState(0);
  const [turn, setTurn] = useState(10);
  useEffect(() => {
    setLength(500);
    setTimeout(() => {
      setLength(10);
    }, 500);
    setInterval(() => {
      setTurn(turn * 200);
    }, 10);
  }, []);
  return (
    <S.Kick
      css={css`
        /* transform: rotate(${turn}deg); */
        height: ${length}px;
        /* right: ${length - 100}px; */
      `}
    ></S.Kick>
  );
};

const Game = () => {
  const [p1Punch, setP1Punch] = useState(false);
  const [p2Punch, setP2Punch] = useState(false);
  const [p1Kick, setP1Kick] = useState(true);
  const [p2Kick, setP2Kick] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const punch1 = () => {
    setP1Punch(true);
    setTimeout(() => {
      setP1Punch(false);
    }, 900);
  };
  const punch2 = () => {
    setP2Punch(true);
    setTimeout(() => {
      setP2Punch(false);
    }, 900);
  };
  const handleKeyPress = (e: any) => {
    if (e.key === 'q') punch1();
    if (e.key === 'i') punch2();
  };
  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, []);
  return (
    <Container>
      <input
        ref={inputRef}
        onKeyDown={handleKeyPress}
        css={css`
          opacity: 0;
        `}
      />
      <S.Cage>
        <S.Boxer>
          {p1Punch ? (
            <P1P />
          ) : (
            <S.BoxerWeapon
              css={css`
                transform: rotate(70deg);
              `}
            />
          )}
          <S.BoxerHead
            css={css`
              background-color: red;
            `}
          ></S.BoxerHead>
          <S.BoxerBody></S.BoxerBody>
          <S.FlexBox>
            <S.BoxerReg />
            {p1Kick ? <P1K /> : <S.BoxerReg />}
          </S.FlexBox>
        </S.Boxer>
        <S.Boxer>
          {p2Punch ? (
            <P2P />
          ) : (
            <S.BoxerWeapon
              css={css`
                transform: rotate(290deg);
                right: 150px;
              `}
            />
          )}
          <S.BoxerHead
            css={css`
              background-color: blue;
            `}
          ></S.BoxerHead>
          <S.BoxerBody></S.BoxerBody>
          <S.FlexBox>
            {p2Kick ? <P2K /> : <S.BoxerReg />}
            <S.BoxerReg />
          </S.FlexBox>
        </S.Boxer>
      </S.Cage>
    </Container>
  );
};

export default Game;
