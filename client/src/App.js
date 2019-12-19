import React, { Component, Fragment } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'

import NavBar from './components/NavBar'
import About from './components/About'
import Footer from './components/Footer'
import Background from './components/Background.js'
import Dashboard from './views/Dashboard.js'
import MainPage from './views/MainPage'

const App = () => {
	return (
		<Fragment>
    		<CssBaseline />
    		<Background />
	    	<MainPage />
	    	<About />
	    	<Footer />
    	</Fragment>
	)
}

export default App