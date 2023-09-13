import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AboutMe from './views/about-me'
import Resume from './views/resume'
import Page from './views/page'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={AboutMe} exact path="/" />
        <Route component={Resume} exact path="/resume" />
        <Route component={Page} path="**" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
