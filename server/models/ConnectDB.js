const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/nowaste`, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;

// mongodb://127.0.0.1/