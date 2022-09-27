const { isPrd, isPrdDev } = require("../utils/env.js");

let fileName = "dev.js";
if (isPrd) fileName = "prd.js";
const conf = require(`./envs/${fileName}`);
module.exports = conf;
