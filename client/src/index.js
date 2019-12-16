import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  	palette: {
    	primary: {
	      	main: '#336699'
	    },
	    secondary: {
	      	main: '#61D095'
	    }
  	}
})

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>
	, document.getElementById('root'));