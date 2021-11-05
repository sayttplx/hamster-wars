import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Battle from './components/battle/Battle';
import Gallery from './components/gallery/Gallery';
import Navbar from './components/Navbar';
import BadUrl from './components/BadUrl';
import Stats from './components/Stats'
import './App.css';


function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/battle'>
          <Battle />
        </Route>
        <Route path='/gallery'>
          <Gallery />
        </Route>
        <Route path='/stats'>
          <Stats />
        </Route>
        <Route path='*'>
          <BadUrl />
        </Route>
      </Switch>
    </>
  );
}

export default App;
