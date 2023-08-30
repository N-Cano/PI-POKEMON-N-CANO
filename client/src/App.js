import Home from "./views/Home/Home";
import Create from "./views/Create/Create";
import Landing from "./views/Landing/Landing";
import Detail from "./views/Detail/Detail";
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/detail/:id' component={Detail} />
      <Route exact path='/create' component={Create} />
    </div>
  );
}

export default App;
