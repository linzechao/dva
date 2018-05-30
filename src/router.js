import React from 'react'
import { Router, Route, Switch } from 'dva/router'

<<<<<<< HEAD
import Index from './routes'
import Login from './routes/login'

import UserHome from './routes/user'

import LearnLog from './routes/learn/log'
=======
import Index from './routes/Index'
import Login from './routes/Login'

import UserHome from './routes/User/Home'
>>>>>>> 8277982a6f8d299627b586d7d606574dbafc55e0

function RouterConfig({ history }) {
  return (
    <Router history={ history }>
      <Switch>
<<<<<<< HEAD
        <Route path="/" exact component={ Index } />
        <Route path="/login" exact component={ Login } />

        <Route path="/user/home" exact component={ UserHome } />

        <Route path="/learn/log" exact component={ LearnLog } />
        <Route path="/log" exact component={ LearnLog } />
=======
        <Route path="/" exact component={Index} />
        <Route path="/login" exact component={Login} />
        <Route path="/user/home" exact component={UserHome} />
>>>>>>> 8277982a6f8d299627b586d7d606574dbafc55e0
      </Switch>
    </Router>
  )
}

export default RouterConfig
