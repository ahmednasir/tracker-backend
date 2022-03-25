const { mongooseConnection, Schema } = require("./mongodb");


const coordinatesSchema = new Schema({
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  userId: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  altitude: {
    type: Number,
  },
  accuracy: {
    type: Number,
  },
  floor: {
    type: Number,
  },
  speed: {
    type: Number,
  },
  speedAccuracy: {
    type: Number,
  },
  isMocked: {
    type: Boolean,
  },
});

coordinatesSchema.index({ userId: 1 });
coordinatesSchema.index({ createdAt: -1 });

const Coordinates = mongooseConnection.model('coordinates', coordinatesSchema)

module.exports = { Coordinates };

