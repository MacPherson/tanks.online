define([
    './playground',
    './tank/tank',
    'config/dict',
    './env/brick',
    './env/grass',
    './env/water',
    './collisions'
], function(Playground, tank, dict, brick, grass, water, collisions) {
    var playground = new Playground();

    playground.add(tank(dict.ME, playground, collisions));

    for(var i = 0; i < 50; i += 1) {
        playground.add(brick(playground));
        playground.add(grass());
        playground.add(water());
    }

    document.body.appendChild(playground.el);
    playground.start();
});