module.exports = {
    uploadImage: (req, res) => {
    	console.log(req.Body)
        return res.status(200).send("image uploaded")
    }
}