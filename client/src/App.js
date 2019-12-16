import React, { Component, Fragment } from 'react'

import NavBar from './components/NavBar'
import Dashboard from './views/Dashboard.js'

const App = () => {
	return (
    	<Fragment>
	    	<NavBar />
	    	<Dashboard />
	    </Fragment>
	)
}

export default App