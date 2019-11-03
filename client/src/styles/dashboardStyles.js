const dashboardStyles = theme => ({
	paper: {
		height: "80vh"
	},
	wrapper: {
		padding: 20
	},
	img: {
		height: "60vh",
		width: "100%"
	},
	toolbar: theme.mixins.toolbar,
	bounding_box: {
		position: "absolute",
		boxShadow: "inset 0 0 0 3px #149df2",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		cursor: "pointer"
	}
})

export default dashboardStyles