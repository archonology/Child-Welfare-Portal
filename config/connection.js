const { connect, connection } = require('mongoose');

connect('mongodb://localhost/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;