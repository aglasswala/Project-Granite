import { makeStyles } from '@material-ui/core/styles';

const aboutStyles = makeStyles(theme => ({
	root: {
		display: "flex",
	    flexFlow: "column wrap",
	    alignItems: "space-around",
	    justifyContent: "center",
	    alignItems: "center",
	    height: "50vh",
	    backgroundColor: "white"
	},
	copy: {
		margin: "0.2em 0",
    	textAlign: "center"
	},
	barTop: {
		marginLeft: "0.8em",
		width: "20em",
		height: "1.5em",
		borderTop: "0.45em solid #a179af",
		borderBottom: "0.45em solid #a179af",
		transform: "skew(-10deg)"
	},
	barBottom: {
	    marginLeft: "0.8em",
	    width: "20em",
	    height: "1.5em",
	    borderTop: "0.45em solid #a179af",
	    borderBottom: "0.45em solid #a179af",
	    transform: "skew(-10deg)",
	    marginLeft: 0,
	    marginRight: "0.8em"
	},
	letter: {
	    display: "inline-block"
	}
}))

export default aboutStyles