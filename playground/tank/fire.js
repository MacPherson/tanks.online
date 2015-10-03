define(['config/dict'], function(dict) {
    function Fire(tankPosition, playground) {
        this.type = 'fire';
        this.zIndex = 3;

        this.position = {
            unit: {
                x: 100,
                y: 100
            },
            sprite: {
                x: 132,
                y: 34,
                shot: 0
            }
        };

        this.tankDir = tankPosition.dir;
        this.destroing = false;

        this.draw = function() {
            if (this.destroing) {
                playground.draw(this.position.sprite.x, this.position.sprite.y, this.position.unit.x, this.position.unit.y);
                return;
            }

            switch(this.tankDir) {
                case 'top':
                    this.position.unit.y -= 3;
                    break;
                case 'right':
                    this.position.unit.x += 3;
                    break;
                case 'bottom':
                    this.position.unit.y += 3;
                    break;
                case 'left':
                    this.position.unit.x -= 3;
                    break;
            }

            if (this.position.unit.x < -33 || this.position.unit.x > dict.canvas.WIDTH ||
                this.position.unit.y < -33 || this.position.unit.y > dict.canvas.HEIGHT) {
                playground.units.splice(playground.units.indexOf(this), 1);
                return;
            }

            var collisionResult = this.checkCollisions(playground, tankPosition.dir, this, 30);

            if (collisionResult.length) {
                collisionResult.forEach(function(collision) {
                    if (collision.type !== 'stop') return;
                    this.destroing = true;

                    setTimeout(function() {
                        this.position.sprite.x = 34;
                        this.position.sprite.y = 33;
                        setTimeout(function() {
                            this.position.sprite.x = 67;
                            setTimeout(function() {
                                this.position.sprite.x = 100;
                                setTimeout(function() {
                                    playground.units.splice(playground.units.indexOf(this), 1);
                                }.bind(this), 40);
                            }.bind(this), 40);
                        }.bind(this), 40);
                    }.bind(this), 40);

                    if (collision.unit.destroy) {
                        collision.unit.destroy();
                    }
                }.bind(this));
            }

            playground.draw(this.position.sprite.x, this.position.sprite.y, this.position.unit.x, this.position.unit.y);
        };

        this.position.unit.x = tankPosition.x;
        this.position.unit.y = tankPosition.y;

        switch(this.tankDir) {
            case 'top':
                this.position.unit.y -= 18;
                this.position.sprite.x = 133;
                break;
            case 'right':
                this.position.unit.x += 18;
                this.position.sprite.x = 199;
                break;
            case 'bottom':
                this.position.unit.y += 18;
                this.position.sprite.x = 232;
                break;
            case 'left':
                this.position.unit.x -= 18;
                this.position.sprite.x = 166;
                break;
        }
    }

    return function(tankPosition, playground, checkCollisions) {

        Fire.prototype.playground = playground;
        Fire.prototype.checkCollisions = checkCollisions;

        return new Fire(tankPosition, playground);
    }
});