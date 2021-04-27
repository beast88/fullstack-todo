import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/global/Header'
import Landing from './pages/Landing';
import RequireAuth from './components/auth/RequireAuth'
import Dashboard from './pages/Dashboard'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/dashboard" component={RequireAuth(Dashboard)} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
