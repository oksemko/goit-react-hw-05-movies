import styled from '@emotion/styled';
import icon from '../../../images/search.svg';

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  // padding-left: 30px;
  margin-bottom: 30px;
  background-color: #1fd1f9;
  border-radius: 5px;
  background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
    box-shadow: 0px 0px 0px 0px rgba(0, 65, 200, 0.5),
            0px 5px 5px 5px rgba(0,65,200,0.5),
            0px 5px 15px 5px rgba(0,65,200,0.5),
            0px 5px 25px 5px rgba(0,65,200,0.5);
            border-radius: 10px;
            margin-bottom: 20px;
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 10px;
  overflow: hidden;
  background-image: url(${icon});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const Label = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 48px;
  font: inherit;
  font-size: 19px;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
