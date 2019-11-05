import React, { Component, Fragment } from 'react'

import NavBar from './components/NavBar'
import Dashboard from './views/Dashboard.js'

import './styles/app.css'

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

export default (App)