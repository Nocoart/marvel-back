const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/comics", async (req, res) => {
	try {
		let title = "";
		if (req.query.title) title = req.query.title;
		let limit = 100;
		if (req.query.limit) limit = req.query.limit;
		let skip = 0;
		if (req.query.page) skip = (req.query.page - 1) * limit;

		const response = await axios.get(
			`https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&title=${title}&limit=${limit}&skip=${skip}`
		);
		res.status(200).json(response.data);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.get("/comics/:characterId", async (req, res) => {
	try {
		const characterId = req.params.characterId;
		const response = await axios.get(
			`https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.MARVEL_API_KEY}`
		);
		res.json(response.data);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});
console.log("test");
module.exports = router;
