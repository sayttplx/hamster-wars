import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Battle from './components/Battle';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import BadUrl from './components/BadUrl';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/battle'>
          <Battle />
        </Route>
        <Route path='/gallery'>
          <Gallery />
        </Route>
        <Route path='/'>
          <BadUrl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
