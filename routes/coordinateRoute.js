const express = require("express");
const { config } = require("../config/config");
const { createCoordinates } = require("../controllers/Coordinates");
const router = express.Router();


router.post('/', (req, res) => {
  try {
    const { body } = req;
    createCoordinates(body)
      .then(response => {
        res.send({ ...config.RESPONSES.SUCCESS, response });
      })
      .catch(error => {
        throw error
      });
  } catch (error) {
    res.status(400).send(config.RESPONSES.BAD_REQUEST)
  }
});

module.exports = router;