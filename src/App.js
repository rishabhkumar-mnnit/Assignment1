import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import PostList from './components/postList/PostList';
import PostDetails from './components/postDetails/PostDetails';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/posts">
              <PostList />
            </Route>
            <Route path="/posts/:id">
              <PostDetails />
            </Route>
          </Switch>

        </Container>
      </Provider>
    </Router>
  );
}

export default App;
