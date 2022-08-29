import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Section = styled.div`
    background: #F7F7F6;
    display: flex;
    /* height: 90vh; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    background: #fff;
    max-width: 900px;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 60px;
    width: 80%;
    @media screen and (max-width: 968px){
      padding: 20px;
    }
`;

export const FormWrapper = styled.div`
    padding: 40px 60px;
`;

export const Row = styled.div`
   display: flex;
   margin: 0 -15px -15px -15px;
   flex-wrap: wrap;
   align-items: center;
   flex-direction: ${({imgStart}) => imgStart ? 'row-reverse' : 'row'};
   @media screen and (max-width: 768px){
    justify-content: center;
   }
`;

export const Column = styled.div`
   margin-bottom: 15px;
   padding-right: 20px;
   padding-left: 15px;
   flex: 1;
   max-width: 50%;
   flex-basis: 50%;

   @media screen and (max-width: 768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
   }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 0;
  padding-bottom: 60px;
  margin-right: 10px;
  @media screen and (max-width: 950px){
    padding-bottom: 65px;
    margin-right: 0;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  margin-left: 30px;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  border-radius: 4px;
  @media screen and (max-width: 950px){
    margin-left: 0;
  }
`;

export const FormInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  outline: none;
  border: none;
  font-size: 16px;
  width : 100%;
  background: #f3f3f3;
  border: 1px solid #808080;

  &:focus {
    border: 2px solid #1089DF;
  }


  &::placeholder {
    font-size: 13px;
    font-weight: normal;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const BoldText =  styled.h1`
    margin-bottom: 50px;
`;

export const SigninText = styled(Link)`
  color: #1089DF;
  margin-left: 10px;
`;

export const ErrorText = styled.p`
  font-size: 14px;
  color: red;
`;