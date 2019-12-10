const dashboardStyles = theme => ({
	paper: {
		height: "85vh",
	},
	wrapper: {
		padding: 15
	},
	img: {
		height: "65vh",
		maxWidth: "100%",
	},
	toolbar: theme.mixins.toolbar,
	bounding_box: {
		position: "absolute",
		boxShadow: "inset 0 0 0 3px #149df2",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		cursor: "pointer"
	},
	langSel: {
		width: "50%"
	},
	buttonSpace1: {
		padding: 10,
		paddingLeft: 0,
		paddingRight: 5,
	},
	buttonSpace2: {
		padding: 10,
		paddingLeft: 5,
		paddingRight: 0,
	},
	option: {
		fontSize: 15,
		'& > span': {
		  marginRight: 10,
		  fontSize: 18,
		},
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	}	
})

export default dashboardStyles