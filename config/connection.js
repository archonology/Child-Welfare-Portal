const { connect, connection } = require('mongoose');

connect('mongodb://localhost/cwportal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;