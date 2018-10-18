// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //delete Many
  // db
  //   .collection('Todos')
  //   .deleteMany({ text: 'ye' })
  //   .then(result => {
  //     console.log(result);
  //   });

  // delete One
  // db
  //   .collection('Todos')
  //   .deleteOne({ text: 'ye' })
  //   .then(result => {
  //     console.log(result);
  //   });

  // find One and delete
  db
    .collection('Todos')
    .findOneAndDelete({ completed: false })
    .then(result => {
      console.log(result);
    });

  // db.close();
});
