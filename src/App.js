import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import PostList from './components/postList/PostList';
import PostDetails from './components/postDetails/PostDetails';

function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
        <Container>
          <Switch>
            <Route exact path="/">
              <PostList />
            </Route>
            <Route path="/:id">
              <PostDetails />
            </Route>
          </Switch>

        </Container>
      </Provider>
    </Router>
  );
}

export default App;
