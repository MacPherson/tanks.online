define(['./fire', 'playground/check-collisions'], function(Fire, checkCollisions) {
    return {
        init: function(tank) {
            tank.userControl.on({
                top: function() {
                    this.position.unit.y -= this.speed;
                },
                right: function() {
                    this.position.unit.x += this.speed;
                },
                bottom: function() {
                    this.position.unit.y += this.speed;
                },
                left: function() {
                    this.position.unit.x -= this.speed;
                },
                fire: function() {
                    tank.playground.units.push(new Fire(tank.position.unit, tank.playground))
                }
            }, tank);

            tank.userControl.interceptor({
                before: function(typeFireEvent) {
                    if (typeFireEvent !== 'fire') {
                        var collisionResult = checkCollisions(this.playground, typeFireEvent, tank, 45);

                        if (collisionResult.length) {
                            for(var i = 0; i < collisionResult.length; i += 1) {
                                switch(collisionResult[i].type) {
                                    case 'stop':
                                        this.changeSpritePosition(typeFireEvent);
                                        return false;
                                        break;
                                    case 'slow':
                                        this.speed = this.DEFAULT_SPEED / 2;
                                        break;
                                }
                            }
                        }
                    }
                },
                after: function(typeFireEvent) {
                    if (typeFireEvent !== 'fire') {
                        this.changeSpritePosition(typeFireEvent);
                        this.speed = this.DEFAULT_SPEED;
                    }
                }
            }, tank);
        }
    }
});