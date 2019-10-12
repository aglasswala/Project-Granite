module.exports = {
    uploadImage: (req, res) => {
    	console.log(req.file.path);
        return res.status(200).send("image uploaded")
    }
}