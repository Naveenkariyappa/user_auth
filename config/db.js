var db = require('mongoose');

db.connect('mongodb://localhost:27017/myapp');

module.exports = db;
