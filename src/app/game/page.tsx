'use client';
import { Container } from 'app/style';
import * as S from './style';
import { css } from '@emotion/react';

const Game = () => {
  const punch = () => {};
  return (
    <Container>
      <S.Cage>
        <S.Boxer>
          <S.BoxerWeapon
            css={css`
              transform: rotate(70deg);
            `}
          ></S.BoxerWeapon>
          <S.BoxerHead
            css={css`
              background-color: red;
            `}
          ></S.BoxerHead>
          <S.BoxerBody></S.BoxerBody>
          <S.FlexBox>
            <S.BoxerReg></S.BoxerReg>
            <S.BoxerReg></S.BoxerReg>
          </S.FlexBox>
        </S.Boxer>
        <S.Boxer>
          <S.BoxerWeapon
            css={css`
              transform: rotate(290deg);
              right: 150px;
            `}
          ></S.BoxerWeapon>
          <S.BoxerHead
            css={css`
              background-color: blue;
            `}
          ></S.BoxerHead>
          <S.BoxerBody></S.BoxerBody>
          <S.FlexBox>
            <S.BoxerReg></S.BoxerReg>
            <S.BoxerReg></S.BoxerReg>
          </S.FlexBox>
        </S.Boxer>
      </S.Cage>
    </Container>
  );
};

export default Game;
