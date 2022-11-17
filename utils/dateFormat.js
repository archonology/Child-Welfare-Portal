//use moment js for time formatting
const moment = require('moment');

//format timestamps
const dateFormat = () => 
moment().format('DD-MM-YYYY');

module.exports = dateFormat;