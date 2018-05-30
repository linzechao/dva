import React from 'react'
import { Router, Route, Switch } from 'dva/router'

import Index from './routes'
import Login from './routes/login'

import UserHome from './routes/user'

import LearnLog from './routes/learn/log'

function RouterConfig({ history }) {
  return (
    <Router history={ history }>
      <Switch>
        <Route path="/" exact component={ Index } />
        <Route path="/login" exact component={ Login } />

        <Route path="/user/home" exact component={ UserHome } />

        <Route path="/learn/log" exact component={ LearnLog } />
        <Route path="/log" exact component={ LearnLog } />
      </Switch>
    </Router>
  )
}

export default RouterConfig
