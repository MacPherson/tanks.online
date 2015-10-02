define(['./fire'], function(Fire) {
    return {
        init: function(tank) {
            function checkCollisions(typeFireEvent) {
                var collisionInsructions = this.playground.units.map(function(unit) {
                    if (unit !== this) {
                        return unit.checkCollisions(this.position.tank, typeFireEvent);
                    }
                }.bind(this));

                var collisionResult = [];

                collisionInsructions.forEach(function(ins) {
                    if (ins) {
                        collisionResult.push(ins.action);
                    }
                });

                return collisionResult;
            }

            tank.userControl.on({
                top: function() {
                    this.position.tank.y -= this.speed;
                },
                right: function() {
                    this.position.tank.x += this.speed;
                },
                bottom: function() {
                    this.position.tank.y += this.speed;
                },
                left: function() {
                    this.position.tank.x -= this.speed;
                },
                fire: function() {
                    tank.playground.units.push(new Fire(tank.position.tank))
                }
            }, tank);

            tank.userControl.interceptor({
                before: function(typeFireEvent) {
                    if (typeFireEvent !== 'fire') {
                        var collisionResult = checkCollisions.call(this, typeFireEvent);

                        if (collisionResult.indexOf('stop') !== -1) {
                            this.changeSpritePosition(typeFireEvent);
                            return false
                        }

                        if (collisionResult.indexOf('slow') !== -1) {
                            this.speed = this.DEFAULT_SPEED / 2;
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