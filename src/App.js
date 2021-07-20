import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import Perfil from './pages/Perfil/Perfil';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route exact path='/'>
                        <LandingPage />
                    </Route>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='/profiles'>
                        <Perfil />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
