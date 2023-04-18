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
    setLength(380);
    setTimeout(() => {
      setLength(10);
    }, 500);
    setInterval(() => {
      setTurn(turn * 125);
    }, 10);
  }, []);
  return (
    <S.Kick
      css={css`
        transform: rotate(${turn}deg);
        width: ${length}px;
        left: ${length / 1.5}px;
        bottom: ${length / 4}px;
      `}
    ></S.Kick>
  );
};
const P2K = () => {
  const [length, setLength] = useState(0);
  const [turn, setTurn] = useState(10);
  useEffect(() => {
    setLength(380);
    setTimeout(() => {
      setLength(10);
    }, 500);
    setInterval(() => {
      setTurn(turn * 125);
    }, 10);
  }, []);
  return (
    <S.Kick
      css={css`
        transform: rotate(${turn}deg);
        width: ${length}px;
        right: ${length / 1.5}px;
        bottom: ${length / 4}px;
      `}
    ></S.Kick>
  );
};

const Game = () => {
  const [p1Punch, setP1Punch] = useState(false);
  const [p2Punch, setP2Punch] = useState(false);
  const [p1Kick, setP1Kick] = useState(false);
  const [p2Kick, setP2Kick] = useState(false);
  const [p1Wib, setP1Wib] = useState(false);
  const [p2Wib, setP2Wib] = useState(false);

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
  const kick1 = () => {
    setP1Kick(true);
    setTimeout(() => {
      setP1Kick(false);
    }, 900);
  };
  const kick2 = () => {
    setP2Kick(true);
    setTimeout(() => {
      setP2Kick(false);
    }, 900);
  };
  const wib1 = () => {
    setP1Wib(!p1Wib);
  };
  const wib2 = () => {
    setP2Wib(!p2Wib);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'q' || e.key === 'Q' || e.key === 'ㅂ') !p1Wib && punch1();
    if (e.key === 'i' || e.key === 'I' || e.key === 'ㅑ') !p2Wib && punch2();
    if (e.key === 'w' || e.key === 'W' || e.key === 'ㅈ') kick1();
    if (e.key === 'o' || e.key === 'O' || e.key === 'ㅐ') kick2();
    if (e.key === 'e' || e.key === 'E' || e.key === 'ㄷ') wib1();
    if (e.key === 'p' || e.key === 'P' || e.key === 'ㅔ') wib2();
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
          position: absolute;
          z-index: 2;
          width: 100vw;
          height: 100vh;
        `}
      />
      <S.Cage>
        <S.Boxer>
          {p1Punch ? (
            <P1P />
          ) : (
            <S.BoxerWeapon
              css={css`
                transition: ease-in-out 0.3s;
                transform: rotate(70deg);
                ${p1Wib && 'position: relative;top: 320px;left: 80px;'}
              `}
            />
          )}
          <div
            css={css`
              transition: ease-in-out 0.3s;
              ${p1Wib &&
              'transform: rotate(70deg);position: relative;top: 80px;left: 100px;'}
            `}
          >
            <S.BoxerHead
              css={css`
                background-color: red;
              `}
            ></S.BoxerHead>
            <S.BoxerBody></S.BoxerBody>
          </div>
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
                transition: ease-in-out 0.3s;
                transform: rotate(290deg);
                right: 150px;
                ${p2Wib && 'position: relative;top: 320px;right: 230px;'}
              `}
            />
          )}
          <div
            css={css`
              transition: ease-in-out 0.3s;
              ${p2Wib &&
              'transform: rotate(-70deg);position: relative;top: 80px;right: 100px;'}
            `}
          >
            <S.BoxerHead
              css={css`
                background-color: blue;
              `}
            ></S.BoxerHead>
            <S.BoxerBody></S.BoxerBody>
          </div>
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
