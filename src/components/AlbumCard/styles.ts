import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  text-decoration: none;
  padding: 20px;
`;

export const Content = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Img = styled.div`
  border-radius: 7px;
  width: 200px;
  height: 200px;
`;

export const InfoBox = styled.div`
  margin-top: 10px;
  color: #3d495c;
  max-inline-size: 200px;
`;

export const AlbumName = styled.h4`
  font-size: 14px;
  margin: 0;
`;

export const ArtistName = styled.span`
  font-size: 12px;
`;
