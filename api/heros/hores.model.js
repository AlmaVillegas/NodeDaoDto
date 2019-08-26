var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var herosShema = new Schema({
    name: {
        type:String
    },
    descripcion:{
        type: String
    }
});
module.exports= herosShema;