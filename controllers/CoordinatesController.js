const moment = require("moment");
const { nanoid } = require("nanoid");
const { saveCoordinates, queryCoordinates } = require("../services/coordinateService")


const createCoordinates = async (payload) => {
  try {
    payload.userId = nanoid();
    return await saveCoordinates(payload);
  } catch (error) {
    console.log(error);
  }
}

const getCoordinates = async ({ to, from, userId }) => {
  try {
    
    from = from ? moment(from).toISOString() : moment().startOf('day').utc().toISOString();
    to = to ? moment(to).toISOString() : moment().endOf('day').utc().toISOString();
    
    const query = {
      createdAt: {
        $gte: from,
        $lte: to
      }
    }
    return await queryCoordinates(query)
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createCoordinates,
  getCoordinates
}