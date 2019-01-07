const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
        name:'Andrew',
        age:25,
        location:'Philadelphia'
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert user', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    })

    /*
    db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('Unable to start todo',err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));

    });*/
    client.close();
});
