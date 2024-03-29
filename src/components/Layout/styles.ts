import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #e1e5eb;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  overflow: auto;
`;
