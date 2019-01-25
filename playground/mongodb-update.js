// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c4b7f58c95fa659efe457bb')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c43d0f2c1163d8fd486b958')
  }, {
    $set: {
      name: 'Karan'
    },
    $inc: {
      age: +1
    }
  }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

// client.close();
});
