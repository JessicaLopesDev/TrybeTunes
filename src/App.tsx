import { Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Login } from './pages/Login';
import { Search } from './pages/Search';
import { Album } from './pages/Album';
import { Favorites } from './pages/Favorites';
import { Profile } from './pages/Profile';
import { Layout } from './components/Layout';
import { NotFound } from './pages/NotFound';
// import { ProfileEdit } from './pages/ProfileEdit';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/search" element={<Search />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/profile/edit" element={<ProfileEdit />} /> */}
        <Route path="/page/not/found" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
