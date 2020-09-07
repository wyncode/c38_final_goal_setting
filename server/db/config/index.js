const mongoose = require('mongoose');

console.log('hello', process.env.MONGODB_URL);

try {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  console.log('Connected to MongoDB');
} catch (e) {
  console.log(e.toString());
}
