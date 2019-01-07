const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp'); 

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID("5c32bc653551a52e28f6dbea")
    },{
        $set:{
            name:'JHao'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then(result=>{
        console.log(result);
    });
    
    /*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c32c008076bdf1010f2a470')
    }, {
        $set:{
            completed:true
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });   */
});
