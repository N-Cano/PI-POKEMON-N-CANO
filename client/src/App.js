import { Route } from 'react-router-dom';

import { Home, Landing, Detail, Create } from "./views";

import './App.css';

function App() {

  return (
    <main className="App">

      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/detail/:id' component={Detail} />
      <Route exact path='/create' component={Create} />

    </main>
  );
}

export default App;
