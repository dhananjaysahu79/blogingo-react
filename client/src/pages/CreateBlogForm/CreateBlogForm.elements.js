import { Box, Chip } from '@material-ui/core';
import styled from 'styled-components';

export const Row = styled.div`
   flex-wrap: wrap;
   align-items: center;
   @media screen and (max-width: 768px){
    justify-content: center;
   }
`;

export const TextWrapper = styled.div`
  padding: 0;
  padding-bottom: 30px;
  @media screen and (max-width: 950px){
    padding-bottom: 65px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-basis: 50%;
  min-width: 50%;
  margin-top: 20px;
  flex: 1;
  margin-bottom: 8px;
  @media screen and (max-width: 950px){
    display: flexbox;
    justify-content: center;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 2px;
  font-size: 16px;
  width: 100%;
  height: 50px;
  margin-right: 20px;
  border: 2px solid #101522;
  &:focus {
    border: 2px solid #1DB954;
  }
  @media screen and (max-width: 768px){
    margin-bottom: 20px;
   }
`;

export const Option = styled.option`
  
`;

export const Input = styled.textarea`
    box-sizing: padding-box;
    overflow: hidden;
    padding: 10px;
    border-radius: 2px;
    outline: none;
    resize: vertical;
    border: none;
    font-size: 16px;
    width : 100%;
    border: 2px solid #101522;
    min-height: 200px;
    display: block;
    &:focus {
    border: 2px solid #1DB954;
  }
`;




