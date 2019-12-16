import { makeStyles } from '@material-ui/core/styles';

const backgroundStyles = makeStyles(theme => ({
	particles: {
		textAlign: "center",
		height: "100%",
		width: "100%",
		background: "#222",
		position: "fixed",
		zIndex: "-1"
	}
}))

export default backgroundStyles