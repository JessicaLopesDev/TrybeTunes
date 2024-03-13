import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to right, #003be5, #00d5e2);
  gap: 2rem;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(/images/bluebg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  background-color: white;
  width: 750px;
  height: 450px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
`;
export const Logo = styled.img``;

export const Input = styled.input`
  color: #003be5;
  border: 1px solid #003be5;
  padding: 8px;
  border-radius: 20px;
  font-size: 18px;
  &:focus {
    transition-duration: 0.3s;
  }
  &::placeholder {
    color: #003be5;
    opacity: 0.7;
    text-align: center;
  }
`;

export const Button = styled.button`
  padding: 8px;
  border-radius: 20px;
  background-color: #003be5;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: bold;
  transition: 0.5s;
  box-shadow: #00d5e2 0px 2px 5px;
  cursor: pointer;
  &:hover {
    background: #00d5e2;
    transform: scale(1.05);
  }
`;
