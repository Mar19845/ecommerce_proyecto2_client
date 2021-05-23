import React from 'react';
import './AppUser.css';
import Navbar from './components/Usuarios/navbarUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Settings from './components/paginas/Users/settingsUser';
import Login from './components/Usuarios/Login/Login';
import Ecommerce from './components/Ecommerce/Ecommerce';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Router>
        <Switch>
          {/*<Route path='/logout' render={(props) => <Login {...props} logout={true} />}/>*/}
          
          <div>
            <Navbar />
            <Route path='/settings' component={Settings} />
            <Route path='/home' component={Ecommerce} />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;