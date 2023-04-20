'use client';
import { Container } from 'app/style';
import * as S from './style';
import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import p1 from 'img/p1.png';
import p2 from 'img/p2.png';

import Image from 'next/image';

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
  let newNum = 60;
  const [num, setNum] = useState<string | number>(3);
  const [p1Punch, setP1Punch] = useState(false);
  const [p2Punch, setP2Punch] = useState(false);
  const [p1Kick, setP1Kick] = useState(false);
  const [p2Kick, setP2Kick] = useState(false);
  const [p1Wib, setP1Wib] = useState(false);
  const [p2Wib, setP2Wib] = useState(false);
  const [is1Damage, set1IsDamage] = useState(false);
  const [is2Damage, set2IsDamage] = useState(false);
  let p1Dodge = false;
  let p2Dodge = false;

  const [p1HP, setP1HP] = useState(300);
  const [p2HP, setP2HP] = useState(300);

  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const punch1 = () => {
    setP1Punch(true);
    setTimeout(() => {
      if (!p2Wib) {
        setP2HP(p2HP - 10), set2IsDamage(true);
      }
    }, 500);
    setTimeout(() => {
      setP1Punch(false);
      set2IsDamage(false);
    }, 900);
  };
  const punch2 = () => {
    setP2Punch(true);
    setTimeout(() => {
      if (!p1Wib) {
        setP1HP(p1HP - 10);
        set1IsDamage(true);
      }
    }, 500);
    setTimeout(() => {
      setP2Punch(false);
      set1IsDamage(false);
    }, 900);
  };
  const kick1 = () => {
    setP1Kick(true);
    setTimeout(() => {
      if (p2Wib) {
        setP2HP(p2HP - 10);
        set2IsDamage(true);
      }
    }, 500);
    setTimeout(() => {
      setP1Kick(false);
      set2IsDamage(false);
    }, 900);
  };
  const kick2 = () => {
    setP2Kick(true);
    setTimeout(() => {
      if (p1Wib) {
        setP1HP(p1HP - 10);
        set1IsDamage(true);
      }
    }, 500);
    setTimeout(() => {
      setP2Kick(false);
      set1IsDamage(false);
    }, 900);
  };
  const wib1 = () => {
    setP1Wib(!p1Wib);
    setTimeout(() => {
      if (p2Wib && !p1Wib) {
        setP1HP(p1HP - 10);
        setP2HP(p2HP - 10);
      }
    }, 500);
    p1Dodge = !p1Wib;
  };
  const wib2 = () => {
    setP2Wib(!p2Wib);
    setTimeout(() => {
      if (p1Wib && !p2Wib) {
        setP1HP(p1HP - 10);
        setP2HP(p2HP - 10);
      }
    }, 500);
    p2Dodge = !p2Wib;
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
    setTimeout(() => {
      setNum(2);
    }, 1000);
    setTimeout(() => {
      setNum(1);
    }, 2000);
    setTimeout(() => {
      setNum('Start!');
      if (inputRef.current !== null) inputRef.current.focus();
      setTimeout(() => {
        setNum(60);
        setInterval(() => {
          newNum--;
          setNum(newNum);
        }, 1000);
      }, 1500);
    }, 3000);
  }, []);
  if (p2HP <= 0 || p1HP <= 0) {
    let winner: string;
    if (p2HP <= 0) winner = 'Player1';
    else winner = 'Player2';
    alert(`winner is ${winner}`);
    router.push('/end');
  }
  if ((num as number) <= 0) {
    let winner: string = '';
    if (p1HP > p2HP) winner = 'Player1';
    else if (p2HP > p1HP) winner = 'Player2';
    else if (p2HP === p1HP) {
      alert(`무승부!`);
      return;
    }
    alert(`winner is ${winner}`);
    router.push('/end');
  }
  return (
    <Container>
      <S.Num>{num}</S.Num>
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
      <S.HPs>
        <h2>P1 : {p1HP}</h2>
        <h2>P2 : {p2HP}</h2>
      </S.HPs>
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
            {is1Damage ? (
              <Image
                src={p1}
                alt=""
                css={css`
                  width: 100px;
                  height: 100px;
                  border-radius: 50px;
                  border: solid 10px black;
                `}
              />
            ) : (
              <S.BoxerHead
                css={css`
                  background-color: red;
                `}
              ></S.BoxerHead>
            )}
            <S.BoxerBody />
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
            {is2Damage ? (
              <Image
                src={p2}
                alt=""
                css={css`
                  width: 100px;
                  height: 100px;
                  border-radius: 50px;
                  border: solid 10px black;
                `}
              />
            ) : (
              <S.BoxerHead
                css={css`
                  background-color: blue;
                `}
              ></S.BoxerHead>
            )}
            <S.BoxerBody />
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
