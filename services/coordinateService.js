const { Coordinates } = require("../models/Coordinates");

const saveCoordinates = async (payload) => {
  try {
    return await Coordinates.create(payload)
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  saveCoordinates
}