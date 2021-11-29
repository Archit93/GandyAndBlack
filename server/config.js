const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  secretKey: process.env.STRIPE_SECRET_KEY,
  port: process.env.PORT,
};
