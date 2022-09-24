import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
<Router>
      <Switch>
        <PrivateRoute path='/' exact={true}>
          {/* 加了exact={true}就不会因URL后面加/login而在/的dashboard里显示我们带‘/login’了*/}
        <Dashboard></Dashboard>
      </PrivateRoute>
      <Route path='/login'>
        <Login></Login>
      </Route>
        <Route path='*'> 
          {/* *代表不管写啥都会匹配到这里 */}
      <Error> </Error>
      </Route>
      </Switch>

    </Router>
    </AuthWrapper>
    
  );
}

export default App;
