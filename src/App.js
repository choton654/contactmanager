import React, { Component } from 'react';
import Contacts from './Components/Contact/Contacts';
import AddContact from './Components/Contact/AddContact';
import EditContact from './Components/Contact/EditContact';
import { Provider } from './Context';
import Header from './Components/Layout/Header';
import About from './Components/Layout/About';
import NotFound from './Components/Layout/NotFound';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className='App'>
            <Header branding='Contact Manager' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/add' component={AddContact} />
                <Route exact path='/edit/:id' component={EditContact} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
