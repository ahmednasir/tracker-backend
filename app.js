const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();


// set body parser
app.use(bodyParser.json());

// set cors
app.use(cors());

app.use('/api/coordinates', require('./routes/coordinateRoute'));

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`App listening on port! ${port}`));