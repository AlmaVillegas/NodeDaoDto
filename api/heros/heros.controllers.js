var heros= require('./heros.dao');
var ip=require('ip');

exports.createHero= function(req, res, next){
    var hero={
        name: req.body.name,
        descripcion: req.body.descripcion
    };
    heros.create(hero, function(err, hero){
        if(err){
            res.json({
                error:err
            })
        }
        res.json({
            message:"Hero created successfully",
            ip:ip.address()
        })
    })
}
exports.getHeros= function(req, res, next){
    heros.get({}, function(err, heros) {
        if(err){
            res.json({
                error:err
            })
        }
        res.json({
            heros: heros
        })
    })
}

exports.getHero=function(req, res, next){
    heros.get({name: req.params.name}, function(err, heros){
        if(err){
            res.json({
                error:err
            })
        }
        res.json({
            heros:heros
        })
    })
}

exports.updateHero= function(req, res, next){
    var hero={
        name: req.body.name,
        descripcion:req.body.descripcion
    }
    heros.update({_id:req.params._id}, hero, function(err, hero){
        if(err){
            res.json({
                error:err
            })
        }
        res.json({
            message: "Hero update successfully"
        })
    })
}

exports.removeHero= function(req, res, next){
    heros.delete({_id: req.params._id}, function(err, hero){
        if(err){
            res.json({
                error: err
            })
        }
        res.json({
            message:"Hero deleted successfully"
        })
    })
}