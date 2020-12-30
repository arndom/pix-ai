import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import FaceFilter from './components/FaceFilter';
import Header from './components/Header';
import PhotoEffects from './components/PhotoEffects';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route path = '/faceF'>
            <FaceFilter/>
          </Route>

          <Route path = '/styleT'>

          </Route>

          <Route path = '/oldN'>

          </Route>

          <Route path ='/'>
            <Header/>
            <PhotoEffects/>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
