import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  background-image: url(/images/bluebg2.png);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  width: 400px;
  border: 1px solid #003be5;
  padding: 8px;
  background-color: rgba(229, 235, 252, 0.5);
  border-radius: 20px;
  font-size: 16px;
  &:focus {
    transition-duration: 0.3s;
    color: #003be5;
    outline: 0;
  }
  &::placeholder {
    color: white;
    opacity: 0.7;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  background-color: #00d5e2;
  color: white;
  border: none;
  font-size: 14px;
  font-weight: bold;
  transition: 0.5s;
  box-shadow: #003be5 0px 2px 5px;
  cursor: pointer;
  &:hover {
    background: #00d5e2;
    transform: scale(1.05);
  }
`;
