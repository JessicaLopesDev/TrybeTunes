import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 20%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export const Logo = styled.img``;

export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserPhoto = styled.img`
  width: 40px;
`;

export const UserName = styled.span``;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Navigation = styled(Link)`
  font-size: 20px;
  opacity: 0.6;
  text-decoration: none;
  &:hover {
    font-weight: bold;
    opacity: 1;
  }
`;
