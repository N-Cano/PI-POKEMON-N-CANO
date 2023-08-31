import { Route, useLocation } from 'react-router-dom';

import { Home, Landing, Detail, Create } from "./views";
import NavBar from './components/NavBar/NavBar';

import './App.css';

function App() {

  const location = useLocation();

  return (
    <main className="App">

      {location.pathname !== '/' && <NavBar />}

      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/detail/:id' component={Detail} />
      <Route exact path='/create' component={Create} />

    </main>
  );
}

export default App;
