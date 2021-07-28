import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import LoginForm from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Movies from './components/Movie'
import HomeSearch from './components/HomeSearch'
import Popular from './components/Popular'
import Account from './components/Account'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/movies/:id" component={Movies} />
      <ProtectedRoute exact path="/home/search" component={HomeSearch} />
      <ProtectedRoute exact path="/popular/:id" component={Popular} />
      <ProtectedRoute exact path="/account" component={Account} />
      <ProtectedRoute exact path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
