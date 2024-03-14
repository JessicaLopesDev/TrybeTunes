import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  height: 100vh;
  background-color: #e1e5eb;
  display: flex;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h3`
  align-self: center;
  color: #003be5;
  margin: 40px 0 30px 0;
`;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
