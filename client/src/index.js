import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { MuiThemeProvider } from '@material-ui/core/styles'
import Theme from './utils/theme'

import "./assets/css/blk-design-system-react.css";


ReactDOM.render(	
	<MuiThemeProvider theme={Theme}>
		<App />
	</MuiThemeProvider>
	, document.getElementById('root'));