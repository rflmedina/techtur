import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background: #00B4D9;

  img {
    height: 600px;
    align-self: flex-end;
    justify-self: end;
  }

  img {
    display: block;
    height: 600px;
    align-self: flex-end;
    justify-self: end;
  }

  @media only screen and (max-width: 767px) {
    img {
      display: none;
    }
  }


  h2 {
    align-self: flex-start;
    justify-self: start;
    color: #FFFF;
    font-size: 48px;
  }

  @media (max-width: 768px) {
    h2 {
      align-self: center;
      position: absolute;
      top: 10%;
    }

    form {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    p {
      display: none;
    }
  }

  p {
    align-self: center;
    justify-self: start;
    color: #FFFF;
    font-size: 48px;
  }

  form {
    position: absolute;
    right: 10%;
    align-self: center;
    flex-direction: column;
  }

`;

export const Form = styled.form`
display: flex;
width: 355px;
height: 423px;
align-items: center;
justify-content: center;

background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;

`;

export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`
box-sizing: border-box;
width: 294px;
height: 56px;
padding-left: 38px;


background: #F2F2F2;
border: 1px solid #F7F7F7;
border-radius: 10px;
margin: 5px;
margin-bottom: 10px;

`;

export const Label = styled.label`
  width: 294px;
  padding: 5px;
  `

export const Button = styled.button`
  display: flex;
  width: 294px;
  height: 56px;
  margin-top: 50px;
  color: #ffff;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #00B4D9;
  border-radius: 10px;
  border: none;
  outline: none;
`;

// Icon styles
export const InputContainer = styled.div`
  position: relative;
`;

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  padding: 10px;
  transform: translateY(-50%);
  color: #999898;
`;