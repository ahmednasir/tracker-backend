
module.exports.config = {
  MONGO_URL: process.env.MONGO_URL,
  RESPONSES: {
    INTERNAL_SERVER_ERROR: {
      StatusCode: 500,
      Result: "InternalServerError",
    },
    UNAUTHORIZED: {
      StatusCode: 401,
      Result: "Unauthorized",
    },
    BAD_REQUEST: {
      StatusCode: 400,
      Result: "BadRequest",
    },
    SUCCESS: {
      StatusCode: 200,
      Result: "Success",
    },
  },
}