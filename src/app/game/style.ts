import styled from '@emotion/styled';

export const Cage = styled.div`
  width: 800px;
  height: 700px;
  display: flex;
  background-color: silver;
  padding-top: 100px;
  justify-content: space-around;
`;

export const Boxer = styled.div`
  width: 100px;
`;

export const BoxerHead = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: gray;
  border: solid 10px black;
`;

export const BoxerBody = styled.div`
  width: 100px;
  height: 180px;
  border-radius: 20px;
  background-color: gray;
  border: solid 10px black;
`;

export const BoxerWeapon = styled.div`
  position: relative;
  top: 240px;
  width: 250px;
  height: 30px;
  background-color: gray;
  border-radius: 20px;
  border: solid 10px black;
`;

export const Punch = styled.div`
  z-index: 1;
  position: relative;
  top: 100px;
  width: 150px;
  height: 30px;
  background-color: gray;
  border-radius: 20px;
  transition: ease-in-out 0.5s;
  border: solid 10px black;
`;

export const BoxerReg = styled.div`
  width: 40px;
  height: 200px;
  background-color: gray;
  border-radius: 20px;
  border: solid 10px black;
`;

export const FlexBox = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
`;

export const Kick = styled.div`
  /* transform: rotate(90deg); */
  z-index: 1;
  width: 40px;
  position: relative;
  height: 40px;
  background-color: gray;
  border-radius: 20px;
  transition: ease-in-out 0.5s;
  border: solid 10px black;
`;
