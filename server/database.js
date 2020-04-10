const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:419153@sotixtestprog-nv6r3.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true},(err)=>{
    if(err){
        return console.log(err);  
    }
})
// .then(r=>console.log(r))
.catch(e=>{console.log(e)})


module.exports={}