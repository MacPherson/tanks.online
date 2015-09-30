define(['playground/check-collisions'], function(checkCollisions) {
    return function(playground) {
        this.type = 'brick';
        this.zIndex = 1;

        this.position = {
            brick: {
                x: 100,
                y: 100
            },
            sprite: {
                x: 165,
                y: 132,
                shot: 0
            }
        };

        this.checkCollisions = function(tankPosition, triggerEvent) {
            var collisions = checkCollisions(tankPosition.x, tankPosition.y, this.position.brick.x, this.position.brick.y);
            if (collisions.is) {
                return {
                    action: 'stop',
                    matrix: collisions.matrix
                }
            }
        }.bind(this);

        this.draw = function() {
            playground.draw(this.position.sprite.x, this.position.sprite.y, this.position.brick.x, this.position.brick.y);
        };

        this.setPosition = function(x, y) {
            this.position.brick.x = x;
            this.position.brick.y = y;
        };
    }
});