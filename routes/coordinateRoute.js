const express = require("express");
const { config } = require("../config/config");
const { createCoordinates, getCoordinates } = require("../controllers/CoordinatesController");
const router = express.Router();


router.post('/', (req, res) => {
  try {
    const { body } = req;
    createCoordinates(body)
      .then(response => {
        res.send(config.RESPONSES.SUCCESS);
      })
      .catch(error => {
        throw error
      });
  } catch (error) {
    res.status(400).send(config.RESPONSES.BAD_REQUEST)
  }
});

router.get('/', (req, res) => {
  try {
    const { to, from } = req.query;
    getCoordinates({ to, from, userId: '' })
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