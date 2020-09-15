import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import SavedBooks from './pages/SavedBooks';

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <Switch>
            <Route path="/" exact component={BooksPage} />
            <Route path="/saved" exact component={SavedBooks} />
          </Switch>
        </div>
      </Router>
        
    );
  }
}

export default App;
