const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
	try {
		let name = "";
		if (req.query.name) name = req.query.name;
		let limit = 100;
		if (req.query.limit) limit = req.query.limit;
		let skip = 0;
		if (req.query.page) skip = (req.query.page - 1) * limit;
		const response = await axios.get(
			`https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&name=${name}&limit=${limit}&skip=${skip}`
		);
		res.status(200).json(response.data);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.get("/character/:characterId", async (req, res) => {
	try {
		const characterId = req.params.characterId;
		const response = await axios.get(
			`https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.MARVEL_API_KEY}`
		);
		res.status(200).json(response.data);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

module.exports = router;
