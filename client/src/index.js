import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Landing from './pages/Landing';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={Landing} />
    </Router>
    
    {/* Page to show all of users todos */}
      {/* Create todo */}
      {/* Edit todo */}
      {/* Delete todo */}
  </React.StrictMode>,
  document.getElementById('root')
);
