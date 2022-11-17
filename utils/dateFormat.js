//use moment js for time formatting
const moment = require('moment');

//format timestamps
const dateFormat = () => 
moment().format('MM-DD-YYYY');

module.exports = dateFormat;