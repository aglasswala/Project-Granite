import React, { Fragment } from 'react'
import { Parallax } from 'react-scroll-parallax';

import aboutStyles from '../styles/aboutStyles'
import { ParallaxProvider } from 'react-scroll-parallax'

const copy = 'Parallax'.split('');

const About = () => {
	const classes = aboutStyles()
	return (
		<ParallaxProvider>
			<div className={classes.root}>
			    <div className={classes.barTop} />
			    <span className={`${classes.copy} h1`}>
			        {copy.map((letter, i) => (
			            <Parallax
			                key={`copy-${i}`}
			                offsetXMax={100 * (i - 3)}
			                className={classes.letter}
			            >
			                {letter}
			            </Parallax>
			        ))}
			    </span>
			    <div className={classes.barBottom} />
			</div>
		</ParallaxProvider>
	)
}

export default About