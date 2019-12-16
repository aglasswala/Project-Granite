import React, { Fragment, useState } from 'react'

import { 
	Grid,
	Typography
} from '@material-ui/core'
import Typing from 'react-typing-animation';

import mainPageStyles from '../styles/mainPageStyles'

const MainPage = ({ ...props }) => {
	const classes = mainPageStyles()
	return (
		<Fragment>
			<Grid
			  container
			  direction="column"
			  justify="center"
			  alignItems="center"
			  style={{height: "100vh"}}
			>
				<Grid item>
					<Typing className={classes.typing}>
						<span>Project Granite</span>
					</Typing>
				</Grid>
			</Grid>
		</Fragment>
	)
}

export default MainPage