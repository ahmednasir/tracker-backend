const { nanoid } = require("nanoid");
const { saveCoordinates } = require("../services/coordinateService")


const createCoordinates = async (payload) => {
  try {
    payload.userId = nanoid();
    return await saveCoordinates(payload);
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  createCoordinates
}