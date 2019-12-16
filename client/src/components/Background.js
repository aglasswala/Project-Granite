import React, { useState } from 'react'
import Particles from 'react-particles-js';

import backgroundStyles from '../styles/backgroundStyles'

const particleOptions = {
			    "particles": {
			        "number": {
			            "value": 160,
			            "density": {
			                "enable": false
			            }
			        },
			        "size": {
			            "value": 3,
			            "random": true,
			            "anim": {
			                "speed": 4,
			                "size_min": 0.3
			            }
			        },
			        "line_linked": {
			            "enable": false
			        },
			        "move": {
			            "random": true,
			            "speed": 1,
			            "direction": "top",
			            "out_mode": "out"
			        }
			    },
			    "interactivity": {
			        "events": {
			            "onhover": {
			                "enable": false,
			                "mode": "bubble"
			            },
			            "onclick": {
			                "enable": false,
			                "mode": "repulse"
			            }
			        },
			        "modes": {
			            "bubble": {
			                "distance": 250,
			                "duration": 2,
			                "size": 0,
			                "opacity": 0
			            },
			            "repulse": {
			                "distance": 400,
			                "duration": 4
			            }
			        }
			    }
			}

const Background = ({ ...props }) => {
	const classes = backgroundStyles()
	return (
		<div className={classes.particles}>
			<Particles params={particleOptions} />
		</div>
	)
}

export default Background