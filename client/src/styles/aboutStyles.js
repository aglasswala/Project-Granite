import { makeStyles } from '@material-ui/core/styles';

const aboutStyles = makeStyles(theme => ({
	root: {
	    height: "80vh",
	    backgroundColor: "white"
	},
	wrapper: {
		padding: 20
	},
	img: {
		boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
	},
	imgWrapper: {
		paddingRight: 30,
		marginTop: 10
	}
}))

export default aboutStyles