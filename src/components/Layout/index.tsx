import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import * as S from './styles';
import { SideBar } from '../SideBar';

export function Layout() {
  return (
    <S.Container>
      <SideBar />
      <S.Main>
        <Header />
        <S.Content>
          <Outlet />
        </S.Content>
      </S.Main>
    </S.Container>
  );
}
