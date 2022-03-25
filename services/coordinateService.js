const { Coordinates } = require("../models/Coordinates");

const saveCoordinates = async (payload) => {
  try {
    return await Coordinates.insertMany(payload)
  } catch (error) {
    console.log(error);
  }
}

const queryCoordinates = async (payload) => {
  try {
    return await Coordinates.find(payload).lean();
  } catch (error) {
    console.log(error);
  }
}




module.exports = {
  saveCoordinates,
  queryCoordinates
}