import styled from 'styled-components';

export const Container = styled.div`
   border: 1px solid red;
`;

export const Header = styled.div`
  //border: 1px solid red;
  height: 100px;
  text-align: left;
  background: whitesmoke;
  
`;

export const Main = styled.div`
  border: 1px solid whitesmoke;
  width: 40%;
  margin: 0 auto;
  padding-top: 20px;
`;


export const Footer = styled.div`
  // border: 1px solid red;
  height: 100px;
  background: whitesmoke;
`;

export const FaceImage = styled.img`
  width: 100px;
  height: 100px;
  float: left;

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //border: 1px solid green;
    width: 600px;
    margin: 0 auto;
    padding: 20px 0;
`;

export const Row = styled.div`
  padding-bottom: 5px;
`;

export const Label = styled.label`
  display: inline-block;
  width: 100px;
  text-align: left;
`;

export const Input = styled.input`
  width: 300px;
  height: 25px;
  padding: 2px 5px;
`;

export const Select = styled.select`
  width: 300px;
 
`;

export const Option = styled.option`
  display: block;
  height: 30px;
  padding: 2px 5px;
`;

export const HeaderText = styled.div`
  padding-top: 20px;
  margin-left: 50px;
  color: #999;
`;

export const H2 = styled.h2`
  padding: 0;
  margin: 0;
`;