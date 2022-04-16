const mongoose = require('mongoose');
const connection = "mongodb+srv://clientain_dbroot:23BangBang23@cluster0.v6tkb.mongodb.net/MERNDatabase1?retryWrites=true&w=majority";
mongoose.connect(connection,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));