import React, { Component, Fragment } from 'react'
import Dashboard from './views/Dashboard'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
    	<Fragment>
	    	<NavBar />
	    	<Dashboard />
	    </Fragment>
    )
  }
}

export default App