const mongoose = require('mongoose');

const db_name='TripPlanner'
const db_url=`mongodb+srv://Pranjan:pranjan123@cluster0.4sg7z.mongodb.net/${db_name}?retryWrites=true&w=majority`


//async fuction - will return promise
mongoose.connect(db_url)         //thenc--shortcut for then catch
.then((result) => {
    console.log('database connected')
}).catch((err) => {
    console.error(err);
});
module.exports=mongoose;