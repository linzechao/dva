import React from 'react'
import { Router, Route, Switch } from 'dva/router'

import Index from './routes/Index'
import Login from './routes/Login'

import UserHome from './routes/User/Home'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/login" exact component={Login} />
        <Route path="/user/home" exact component={UserHome} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
