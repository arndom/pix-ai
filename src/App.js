import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import FaceFilter from './components/FaceFilter';
import Header from './components/Header';
import OldNew from './components/OldNew';
import PhotoEffects from './components/PhotoEffects';
import StyleTransfer from './components/StyleTransfer';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route path = '/faceF'>
            <FaceFilter/>
          </Route>

          <Route path = '/styleT'>
            <StyleTransfer/>
          </Route>

          <Route path = '/oldN'>
            <OldNew/>
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
