import React from 'react'
import ReactDOM from 'react-dom'
import dotenv from 'dotenv'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Layout } from 'components'

import { Search, Artist, Favorites } from 'pages'
import { Store } from 'store'

import 'bootstrap/dist/css/bootstrap.min.css'

dotenv.config()

const customHistory = createBrowserHistory()

ReactDOM.render(
  <Router history={customHistory}>
    <Switch>
      <Provider store={Store}>
        <Layout>
          <Route exact path="/" component={Search} />
          <Route path="/artist/:id" component={Artist} />
          <Route path="/favorites" component={Favorites} />
        </Layout>
      </Provider>
    </Switch>
  </Router>,
  document.getElementById('root')
)
