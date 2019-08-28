import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import logo from './logo-small.png';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  onError: e => {
    console.log(e);
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <React.Fragment>
          <div className="conntainer">
            <img
              src={logo}
              alt="SpaceX"
              style={{ width: 300, display: 'block', margin: 'auto' }}
            />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </React.Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
