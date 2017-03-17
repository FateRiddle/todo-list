import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,Route } from 'react-router-dom'

import App from './App'

const Root = ({ store }) => (
  <Provider store={store} >
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/:filter' component={App} />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Root
