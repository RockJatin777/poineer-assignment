import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Assets from './components/Assets'
import Organization from './components/Organization'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/assets" component={Assets} />
    <Route exact path="/organization" component={Organization} />
    <NotFound />
  </Switch>
)

export default App
