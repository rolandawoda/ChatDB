const config = {
  db: {
    url: "localhost:27017",
    name: process.env.MONGO_DEFAULT_DATABASE,
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
  },
};
module.exports = config;
