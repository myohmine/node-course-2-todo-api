const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp'); 
    
    db.collection('Todos').findOneAndDelete({text:'Eat lunch'})
        .then((result)=>{
            console.log(result);
        });  
    
    client.close();
});
