import React, { Component, Fragment } from 'react'

import { 
   Grid, 
   Paper, 
   withStyles, 
   MenuItem, 
   Select, 
   Typography, 
   Grow, 
   Snackbar, 
   CircularProgress, 
   TextField, 
   Menu,
} from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';
import { uploadFile } from '../api/apis.js'
import dashboardStyles from '../styles/dashboardStyles'
import { languages } from '../utils/utils'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";


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
    checked: false,
    loadingIcon: false
  }

  onCheckedHandlerTrue = () =>{
    this.setState({checked: true})
  }

  onCheckedHandlerFalse = () =>{
    this.setState({checked:false})
  }

  loadingIconHandler = () =>{
    let tempLoadIcon = !this.state.loadingIcon;
    this.setState({loadingIcon: tempLoadIcon})
  }

  onChangeHandler = event => {
    const file = this.state.filePreview
    this.setState({
      checked: false,
      file: event.target.files[0],
      filePreview: URL.createObjectURL(event.target.files[0])
    })
  } 

  onClickHandler = async () => {
    this.onCheckedHandlerFalse()
    this.loadingIconHandler()
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
    await uploadFile(data, config)
      .then(response => 
        this.setState({ names: response.data }, () =>{
          this.onCheckedHandlerTrue()
          this.loadingIconHandler()
        }))
      
      .catch(err => {
        this.setState({
          errors: err
        })
      })
    
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
        <div className="landing-page">
          <div className="wrapper">
            <div className="page-header">
              <img
                alt="..."
                className="path"
                src={require("../assets/img/blob.png")}
              />
              <img
                alt="..."
                className="path2"
                src={require("../assets/img/path2.png")}
              />
              <img
                alt="..."
                className="shapes triangle"
                src={require("../assets/img/triunghiuri.png")}
              />
              <img
                alt="..."
                className="shapes wave"
                src={require("../assets/img/waves.png")}
              />
              <img
                alt="..."
                className="shapes squares"
                src={require("../assets/img/patrat.png")}
              />
              <img
                alt="..."
                className="shapes circle"
                src={require("../assets/img/cercuri.png")}
              />
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <div className={classes.wrapper}>
                        <Grid 
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                        >
                          <Grid item>
                            <div className={classes.wrapper}>
                              <img src={this.state.filePreview} id="inputImage" className={classes.img} alt="" />
                            </div>
                          </Grid>
                        </Grid>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-end"
                      >
                        <Grid item style={{width: "100%"}}>
                          <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            style={{width: "100%"}}
                          >
                            <Grid item style={{width: "50%"}}>
                              <Autocomplete
                                disableClearable = {true}
                                options={languages}
                                getOptionLabel={option => option.language}
                                style = {{width:"100%"}}
                                onChange = {(event, newValue) => {
                                  this.setState({selectedLang: newValue})
                                  
                                }}
                                value={this.state.selectedLang.language}
                                renderInput={params => (
                                  <TextField {...params} label="Choose a language" variant="outlined" fullWidth/>
                                )}
                              />
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
                  </div>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <div className={classes.wrapper}>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        {this.state.loadingIcon ? 
                              <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                              >
                                <Grid item>
                                  <CircularProgress size = {100}/>
                                </Grid>
                              </Grid> : null
                        }
                          <Grow in={this.state.checked}>
                            <Grid item style={{width: "50%", padding: "8px"}}>
                                <Typography variant="h3">
                                  English
                                </Typography>
                                {this.state.names.map((name, key) => {
                                  return <p key={key}> {name.original} </p>
                                })}
                            </Grid>
                          </Grow>
                          <Grow in={this.state.checked}>
                            <Grid item style={{width: "50%", padding:"8px"}}>
                                <Typography variant="h3">
                                  {this.state.selectedLang.language}
                                </Typography>
                                {this.state.names.map((name, key) => {
                                  return <p key={key}> {name.translated} </p>
                                })}
                            </Grid>
                          </Grow>
                      </Grid>
                  </div>
                </Grid>
              </Grid>
            </div>
            <section className="section section-lg">
              <section className="section">
                <Container>
                  <Row className="row-grid justify-content-between">
                    <Col className="mt-lg-5" md="5">
                      <Row>
                        <Col className="px-2 py-2" lg="6" sm="12">
                          <Card className="card-stats">
                            <CardBody>
                              <Row>
                                <Col md="4" xs="5">
                                  <div className="icon-big text-center icon-warning">
                                    <i className="tim-icons icon-trophy text-warning" />
                                  </div>
                                </Col>
                                <Col md="8" xs="7">
                                  <div className="numbers">
                                    <CardTitle tag="p">3,237</CardTitle>
                                    <p />
                                    <p className="card-category">Awards</p>
                                  </div>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col className="px-2 py-2" lg="6" sm="12">
                          <Card className="card-stats upper bg-default">
                            <CardBody>
                              <Row>
                                <Col md="4" xs="5">
                                  <div className="icon-big text-center icon-warning">
                                    <i className="tim-icons icon-coins text-white" />
                                  </div>
                                </Col>
                                <Col md="8" xs="7">
                                  <div className="numbers">
                                    <CardTitle tag="p">3,653</CardTitle>
                                    <p />
                                    <p className="card-category">Commits</p>
                                  </div>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="px-2 py-2" lg="6" sm="12">
                          <Card className="card-stats">
                            <CardBody>
                              <Row>
                                <Col md="4" xs="5">
                                  <div className="icon-big text-center icon-warning">
                                    <i className="tim-icons icon-gift-2 text-info" />
                                  </div>
                                </Col>
                                <Col md="8" xs="7">
                                  <div className="numbers">
                                    <CardTitle tag="p">593</CardTitle>
                                    <p />
                                    <p className="card-category">Presents</p>
                                  </div>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col className="px-2 py-2" lg="6" sm="12">
                          <Card className="card-stats">
                            <CardBody>
                              <Row>
                                <Col md="4" xs="5">
                                  <div className="icon-big text-center icon-warning">
                                    <i className="tim-icons icon-credit-card text-success" />
                                  </div>
                                </Col>
                                <Col md="8" xs="7">
                                  <div className="numbers">
                                    <CardTitle tag="p">10,783</CardTitle>
                                    <p />
                                    <p className="card-category">Forks</p>
                                  </div>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="6">
                      <div className="pl-md-5">
                        <h1>
                          Large <br />
                          Achivements
                        </h1>
                        <p>
                          I should be capable of drawing a single stroke at the
                          present moment; and yet I feel that I never was a
                          greater artist than now.
                        </p>
                        <br />
                        <p>
                          When, while the lovely valley teems with vapour around
                          me, and the meridian sun strikes the upper surface of
                          the impenetrable foliage of my trees, and but a few
                          stray.
                        </p>
                        <br />
                        <a
                          className="font-weight-bold text-info mt-5"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Show all{" "}
                          <i className="tim-icons icon-minimal-right text-info" />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </section>
            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={this.state.noFile}
              onClose={this.handleClose}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<Typography> Select a file to upload </Typography>}
            />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withStyles(dashboardStyles)(Dashboard)

              // <Grid
              //   container
              //   direction="row"
              //   justify="center"
              //   alignItems="center"
              // >
              //   <Grid item xs={12} md={5}>
              //     <div className={classes.wrapper}>
              //       <Paper className={classes.paper}>
              //           <Grid 
              //           container
              //           direction="column"
              //           justify="center"
              //           alignItems="center"
              //           >
              //             <Grid item>
              //               <div className={classes.wrapper}>
              //                 <img src={this.state.filePreview} id="inputImage" className={classes.img} alt="" />
              //               </div>
              //             </Grid>
              //           </Grid>
              //         <Grid
              //           container
              //           direction="column"
              //           justify="center"
              //           alignItems="flex-end"
              //         >
              //           <Grid item style={{width: "100%"}}>
              //             <Grid
              //               container
              //               direction="column"
              //               justify="center"
              //               alignItems="center"
              //               style={{width: "100%"}}
              //             >
              //               <Grid item style={{width: "50%"}}>
              //                 <Autocomplete
              //                   disableClearable = {true}
              //                   options={languages}
              //                   getOptionLabel={option => option.language}
              //                   style = {{width:"100%"}}
              //                   onChange = {(event, newValue) => {
              //                     this.setState({selectedLang: newValue})
                                  
              //                   }}
              //                   value={this.state.selectedLang.language}
              //                   renderInput={params => (
              //                     <TextField {...params} label="Choose a language" variant="outlined" fullWidth/>
              //                   )}
              //                 />
              //               </Grid>
              //               <Grid item style={{width: "50%"}}>
              //                 <Grid
              //                   container
              //                   direction="row"
              //                   justify="center"
              //                   alignItems="center"
              //                 >  

              //                   <Grid item style={{width: "50%"}}>
              //                     <div className={classes.buttonSpace1}>
              //                       <input
              //                         accept="image/*"
              //                         style={{ display: 'none' }}
              //                         id="raised-button-file"
              //                         multiple
              //                         onChange={this.onChangeHandler}
              //                         type="file"
              //                       />
              //                       <label htmlFor="raised-button-file">
              //                         <Button variant="contained" component="span" color="primary" style={{width: "100%"}}>
              //                           Upload 
              //                         </Button>
              //                       </label>
              //                     </div>
              //                   </Grid>
              //                   <Grid item style={{width: "50%"}}>
              //                     <div className={classes.buttonSpace2}>
              //                       <Button onClick={this.onClickHandler} size="large" style={{width: "100%"}}>
              //                         Submit
              //                       </Button>
              //                     </div>
              //                   </Grid>
              //                 </Grid>
              //               </Grid>
              //             </Grid>
              //           </Grid>
              //         </Grid>
              //       </Paper>
              //     </div>
              //   </Grid>
              //   <Grid item xs={12} sm={5}>
              //     <div className={classes.wrapper}>
              //       <Paper className={classes.paper}>
              //         <Grid
              //           container
              //           direction="row"
              //           justify="center"
              //           alignItems="center"
              //         >
              //           {this.state.loadingIcon ? 
              //                 <Grid
              //                   container
              //                   direction="column"
              //                   justify="center"
              //                   alignItems="center"
              //                 >
              //                   <Grid item>
              //                     <CircularProgress size = {100}/>
              //                   </Grid>
              //                 </Grid> : null
              //           }
              //             <Grow in={this.state.checked}>
              //               <Grid item style={{width: "50%", padding: "8px"}}>
              //                 <Paper elevation12>
              //                   <Typography variant="h3">
              //                     English
              //                   </Typography>
              //                   {this.state.names.map((name, key) => {
              //                     return <p key={key}> {name.original} </p>
              //                   })}
              //                 </Paper>
              //               </Grid>
              //             </Grow>
              //             <Grow in={this.state.checked}>
              //               <Grid item style={{width: "50%", padding:"8px"}}>
              //                 <Paper>
              //                   <Typography variant="h3">
              //                     {this.state.selectedLang.language}
              //                   </Typography>
              //                   {this.state.names.map((name, key) => {
              //                     return <p key={key}> {name.translated} </p>
              //                   })}
              //                 </Paper>
              //               </Grid>
              //             </Grow>
              //         </Grid>
              //       </Paper>
              //     </div>
              //   </Grid>
              // </Grid>