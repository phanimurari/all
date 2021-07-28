import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'

import Products from './components/Products/index'
import Cart from './components/Cart/index'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
)

export default App
