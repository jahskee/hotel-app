import styled from 'styled-components';

export const Container = styled.div`
   //border: 1px solid red;
   background: #ccc
   height: 100vh;
`;

export const Header = styled.div`
  //border: 1px solid red;
  height: 100px;
  text-align: left;
  background: whitesmoke;
  color: #3f3838;
`;

export const FaceImage = styled.img`
  width: 80px;
  height: 80px;
  float: left;
`;

export const MailImage = styled.img`
  width: 100px;
  float: left;
  transform: rotate(-20deg);
  padding-left: 10px;
  margin-top: 15px;
  opacity: 0.3;
  filter: alpha(opacity=30); /* For IE8 and earlier */
  //border: 1px solid red;
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
  text-align: left;
`;

export const Label = styled.label`
  display: inline-block;
  width: 100px;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 10px;
`;

export const Select = styled.select`
  width: 300px;
  padding: 50px;
`;

export const Option = styled.option`
  display: block;
  box-sizing: content-box;
  height: 100px;
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
  color: #6b5f5f;
`;

export const Text1 = styled.div`
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
  color: #3f3838;
  text-align: left;
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  width: 300px;
  margin: 40px auto;
`;

export const SelectState = styled.div`
  display: inline-block;
  text-align: left;
`;

export const FormTop = styled.div`
  margin-bottom: 0;
`;

export const ErrorMsg = styled.div`
  text-align: left;
  padding-left: 1px;
  color: #a04343;
`;

export const InputPanel = styled.div`
  //border: 1px solid red;
  width: 60%;
  margin: 0 auto;
  color: #3f3838;
`;