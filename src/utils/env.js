const ENV = process.env.NODE_ENV || "";

module.exports = {
  ENV,
  isPrd: ENV === "production",
  isDev: ENV === "dev",
};
