import React, { Component, Fragment } from 'react'

import NavBar from './components/NavBar'
import Dashboard from './views/Dashboard.js'


class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Dashboard>
        </Dashboard>
      </Fragment>
    )
  }
}

export default App