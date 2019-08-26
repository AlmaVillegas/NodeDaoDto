var heros = require('./heros.controllers');

module.exports= function(router){
    router.post('/create', heros.createHero);
    router.get('/get', heros.getHeros);
    router.get('/get/:name', heros.getHero);
    router.put('/update/:id', heros.updateHero);
    router.delete('/remove/:id',heros.removeHero);
}