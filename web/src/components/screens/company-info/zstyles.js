import styled from 'styled-components';

export const Container = styled.div`
   //border: 1px solid red;
  
   background: #ccc
`;

export const Header = styled.div`
  //border: 1px solid red;
  height: 100px;
  text-align: left;
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
    margin-top: 100px;
    padding: 20px 0;
    background: whitesmoke;
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



export const Text1 = styled.div`
  padding: 20px;
  font-size: 20px;
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  width: 300px;
  margin: 40px auto;
`;