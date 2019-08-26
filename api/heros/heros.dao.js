var mongoose = require('mongoose');
var herosShema = require('./hores.model');

herosShema.statics= {
    create : function(data, cb){
        var hero= new this (data);
        hero.save(cb);
    },
    get: function(query, cb){
        this.find(query, cb);
    },
    getByName: function(query, cb){
        this.find(query, cb);
    },
    update: function(query, updateData, cb){
        this.findOneAndUpdate(query, {$set: this.updateData}, {new: true}, cb);
    },
    delete: function(query, cb){
        this.findOneAndDelete(query, cb);
    }
}
    var herosModel = mongoose.model('Hero', herosShema);
    module.exports = herosModel;