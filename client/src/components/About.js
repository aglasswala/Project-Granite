import React, { Fragment } from 'react'

import {
	Grid
} from '@material-ui/core'

import aboutStyles from '../styles/aboutStyles'

const About = () => {
	const classes = aboutStyles()
	return (
		<div className={classes.root}>
			<Grid
			  container
			  direction="row"
			  justify="space-between"
			  alignItems="center"
			  style={{ height: "100%" }}
			>
				<Grid item>
					Oh yeah
				</Grid>
				<Grid item style={{height: "100%"}}>
					<div className={classes.imgWrapper}>
						<img className={classes.img} src="https://picsum.photos/650/500" alt="really cool picture here" />
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default About