import styled from '@emotion/styled';

export const Board = styled.ul`
  margin: -10px;
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5 - 20px);
  margin: 10px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  width: 180px;
  height: auto;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const Span = styled.span`
font-family: Roboto, Arial, sans-serif;
font-size: 30px;
font-weight: 700;
color: #020024;
background: radial-gradient( #020024 1px, transparent 1.5px);
  background-size: 3px 3px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `
