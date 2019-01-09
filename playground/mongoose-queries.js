const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id="5c3460ecf928891cac18412d";

Todo.findOne({_id:id}).then((todo)=>{
    console.log('Todo', todo);
});

Todo.findById(id).then((todo)=>{
    console.log('Todo by Id ', todo);
});