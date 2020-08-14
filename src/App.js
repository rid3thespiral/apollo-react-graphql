import React from 'react';
import ApolloClient from 'apollo-boost';
import './App.css';
import { ApolloProvider } from "react-apollo";
import Courses from './components/Courses';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client = {client}>
    <div>
      <Courses/>
    </div>
  </ApolloProvider>
)

export default App;
