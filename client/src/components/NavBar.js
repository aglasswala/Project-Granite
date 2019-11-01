import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core'

import navbarStyles from '../styles/navbarStyles'

const NavBar = (props) => {
    const { classes } = props
    return ( 
        <div>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Welcome
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(navbarStyles)(NavBar)