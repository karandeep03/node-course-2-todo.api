const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c4e83659b1838ccb8f1ad4d11';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not Valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id no found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('5c4cdf033a57a71de4ca4c0e').then((user) => {
  if(!user) {
    return console.log('User not Found');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e));
