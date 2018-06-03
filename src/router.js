import React from 'react'
import { Router, Route, Switch, IndexRoute } from 'dva/router'

import Parent from './components/parent'

import Index from './routes'
import Login from './routes/login'

import User from './routes/user'

import Learn from './routes/learn'
import LearnLog from './routes/learn/log'

function RouterConfig({ history }) {
  return (
    <Router history={ history }>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/login" exact component={Login} />

        <Route path="/user" exact component={User} />

        <Route path="/learn" exact component={Parent}>
          <Route path="log" component={LearnLog} />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterConfig
