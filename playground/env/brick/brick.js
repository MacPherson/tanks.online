define(['playground/check-collisions'], function(checkCollisions) {
    return function(playground) {
        this.type = 'brick';
        this.zIndex = 2;

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
            if (checkCollisions(triggerEvent, tankPosition.x, tankPosition.y, this.position.brick.x, this.position.brick.y)) {
                return {
                    action: 'stop'
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