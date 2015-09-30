define(function() {
    return {
        init: function(tank) {
            tank.userControl.on({
                top: function() {
                    this.position.tank.y -= 3;
                },
                right: function() {
                    this.position.tank.x += 3;
                },
                bottom: function() {
                    this.position.tank.y += 3;
                },
                left: function() {
                    this.position.tank.x -= 3;
                },
                fire: function() {
                    console.log('fire')
                }
            }, tank);

            tank.userControl.interceptor({
                before: function(typeFireEvent) {
                    if (typeFireEvent !== 'fire') {
                        this.playground.clear(this.position.tank.x, this.position.tank.y, 45, 45);

                        var collisionInsructions = this.playground.units.map(function(unit) {
                            if (unit !== this) {
                                return unit.checkCollisions(this.position.tank, typeFireEvent);
                            }
                        }.bind(this)).filter(function(ins){return ins !== undefined});

                        var collisionResult = collisionInsructions.map(function(ins){return ins.action});

                        if (collisionResult.indexOf('hide') !== -1) {
                            this.hideMatrix = collisionInsructions.filter(function(ins){return ins.action === 'hide'}).map(function(ins){return ins.matrix});
                        } else {
                            this.hideMatrix = null;
                        }
                        this.draw();

                        //if (collisionResult.indexOf('stop') !== -1) {
                        //    this.changeSpritePosition(typeFireEvent);
                        //    this.draw();
                        //    return false
                        //}
                        //
                        //if (collisionResult.indexOf('slow') !== -1) {
                        //
                        //}
                    }
                },
                after: function(typeFireEvent) {
                    if (typeFireEvent !== 'fire') {
                        this.changeSpritePosition(typeFireEvent);
                        this.draw();
                        this.playground.clear(this.position.tank.x, this.position.tank.y, 45, 45);
                        this.draw();
                    }
                }
            }, tank);
        }
    }
});