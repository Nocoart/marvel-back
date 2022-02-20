require("dotenv").config();

const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");

const app = express();
app.use(formidable());
app.use(cors());

const comicsRoutes = require("./routes/comicsRoutes");
app.use(comicsRoutes);

const charactersRoutes = require("./routes/charactersRoutes");
app.use(charactersRoutes);

app.all("*", (req, res) => {
	console.log("in lost route");
	res.status(404).json({ message: "page not found 😔" });
});

app.listen(process.env.PORT, () => {
	console.log(`server started on port ${process.env.PORT} 🔥`);
});
