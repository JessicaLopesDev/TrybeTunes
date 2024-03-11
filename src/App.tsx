import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Search } from './pages/Search';
import { Album } from './pages/Album';
import { Favorites } from './pages/Favorites';
import { Profile } from './pages/Profile';
import { Layout } from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/" element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
        <Route path="/favorites" element={ <Favorites /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Route>
    </Routes>
  );
}

export default App;
