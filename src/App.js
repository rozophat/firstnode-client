import React, { Component }  from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
  uri: 'https://firstnode-server.rozophat.now.sh/graph'
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>My First Nodejs Project</h1>
                <BookList />
                <AddBook/>
            </div>
        </ApolloProvider>
    );
  }
}

export default App;
