import React, { Component, Fragment } from 'react'

import { List, Grid, Button, Paper, withStyles, MenuItem, Select, Typography, Snackbar, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core'

import { uploadFile } from '../api/apis.js'
import dashboardStyles from '../styles/dashboardStyles'
import { languages } from '../utils/utils'


class Dashboard extends Component {

  state = {
    file: { name: "" },
    names: [
      {
        original: "stuff",
        translated: "things"
      },
      {
        original: "stuff",
        translated: "things"
      },
      {
        original: "stuff",
        translated: "things"
      },
      {
        original: "stuff",
        translated: "things"
      },
      {
        original: "stuff",
        translated: "things"
      },
    ],
    filePreview: null,
    openMenu: false,
    selectedLang: {
      code: "ga",
      language: "Irish"
    },
    errors: {},
    box: {},
    noFile: false
  }

  onChangeHandler = event => {
    const file = this.state.filePreview
    this.setState({
      file: event.target.files[0],
      filePreview: file || URL.createObjectURL(event.target.files[0])
    })
  } 

  onClickHandler = async () => {
    const selLang = languages.filter(lang => lang.language === this.state.selectedLang.language)

    const data = new FormData()
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    data.append('file', this.state.file)
    data.append('lang', selLang[0].code)

    if (this.state.file.name === "") {
      return this.handleNoFileClick()
    }

    // await uploadFile(data, config)
    //   .then(response => this.setState({ names: response.data }))
    //   .catch(err => {
    //     this.setState({
    //       errors: err
    //     })
    //   })
    this.calculateFaceLocation()
  }

  handleMenuClick = (state) => {
    this.setState({
      openMenu: state
    })
  }

  changeLanguage = event => {
    this.setState({
      selectedLang: {
        language: event.target.value
      } 
    })
  }

  calculateFaceLocation = () => {
    // let clar = this.state.names.filter(name => name.instance.length !== 0)

    // const image = document.getElementById('inputImage')
    // const width = Number(image.width);
    // const height = Number(image.height);

    // console.log(width)
    // console.log(height)
    // this.setState({
    //   box: {
    //     leftCol: clar.BoundingBox.Left * width,
    //     topRow: clar.BoundingBox.Top * height,
    //     rightCol: width - (clar.BoundingBox.Width * width),
    //     bottomRow: height - (clar.BoundingBox.Width * height)
    //   }
    // })
  }

  handleNoFileClick = () => {
    this.setState({
      noFile: true
    })
  }

  handleClose = () => {
    this.setState({
      noFile: false
    })
  }

  render() {
    const { classes } = this.props
    const { box } = this.state
    return (
      <Fragment>
        <div>
          <div className={classes.toolbar} />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={5}>
              <div className={classes.wrapper}>
                <Paper className={classes.paper}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <div className={classes.wrapper}>
                        <img src={this.state.filePreview} id="inputImage" style={{width: "400px"}} className={classes.img} alt="" />
                      </div>
                    </Grid>
                    <Grid item style={{width: "100%"}}>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        style={{width: "100%"}}
                      >
                        <Grid item style={{width: "50%"}}>
                          <Select
                            value={this.state.selectedLang.language}
                            onChange={this.changeLanguage}
                            style={{width: "100%"}}
                          >
                            {languages.map((lang, key) => {
                              return <MenuItem key={key} value={lang.language}>{lang.language}</MenuItem>
                            })}
                          </Select>
                        </Grid>
                        <Grid item style={{width: "50%"}}>
                          <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                          >  

                            <Grid item style={{width: "50%"}}>
                              <div className={classes.buttonSpace1}>
                                <input
                                  accept="image/*"
                                  style={{ display: 'none' }}
                                  id="raised-button-file"
                                  multiple
                                  onChange={this.onChangeHandler}
                                  type="file"
                                />
                                <label htmlFor="raised-button-file">
                                  <Button variant="contained" component="span" color="primary" style={{width: "100%"}}>
                                    Upload 
                                  </Button>
                                </label>
                              </div>
                            </Grid>
                            <Grid item style={{width: "50%"}}>
                              <div className={classes.buttonSpace2}>
                                <Button onClick={this.onClickHandler} size="large" style={{width: "100%"}}>
                                  Submit
                                </Button>
                              </div>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className={classes.wrapper}>
                <Paper className={classes.paper}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <Grid item>
                          <div className={classes.wrapper}>
                            <Typography variant="h3">
                               English
                            </Typography>
                          </div>
                        </Grid>
                        <Grid item>
                          <div className={classes.wrapper}>
                            <Typography variant="h3">
                              {this.state.selectedLang.language}
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                     </Grid>
                     <Grid item>
                      <List>
                        {this.state.names.map((name, key) => {
                          return <ListItem key={key}>
                                   <ListItemText id={key} primary={name.original} />
                                   <ListItemSecondaryAction>
                                      {name.translated}
                                   </ListItemSecondaryAction>
                                 </ListItem>
                        })}
                      </List>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>
         <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={this.state.noFile}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<Typography> Select a file to upload </Typography>}
        />
      </Fragment>
    )
  }
}

export default withStyles(dashboardStyles)(Dashboard)
