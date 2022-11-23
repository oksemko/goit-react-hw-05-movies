import styled from '@emotion/styled';
import image from '../../images/background.webp';

export const Header = styled.header`
  padding-top: 60px;
  padding-bottom: 60px;
  margin-bottom: 30px;
  background-color: rgba(0, 0, 0, 0.8);
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.56),
      rgba(0, 0, 0, 0.56)
    ),
    url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100px;
`;
