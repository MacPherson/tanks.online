define(function() {
    return function(tankPosition) {
        this.type = 'fire';
        this.zIndex = 3;

        this.position = {
            fire: {
                x: 100,
                y: 100
            },
            sprite: {
                x: 132,
                y: 33,
                shot: 0
            }
        };

        this.tankDir = tankPosition.dir

        this.checkCollisions = function(tankPosition, triggerEvent) {
            //if (checkCollisions(triggerEvent, tankPosition.x, tankPosition.y, this.position.fire.x, this.position.fire.y)) {
            //    return {
            //        action: 'stop'
            //    }
            //}
        }.bind(this);

        this.draw = function() {
            switch(this.tankDir) {
                case 'top':
                    this.position.fire.y -= 3;
                    break;
                case 'right':
                    this.position.fire.x += 3;
                    break;
                case 'bottom':
                    this.position.fire.y += 3;
                    break;
                case 'left':
                    this.position.fire.x -= 3;
                    break;
            }
            playground.draw(this.position.sprite.x, this.position.sprite.y, this.position.fire.x, this.position.fire.y);
        };

        this.position.fire.x = tankPosition.x;
        this.position.fire.y = tankPosition.y;

        switch(this.tankDir) {
            case 'top':
                this.position.fire.y -= 33;
                this.position.sprite.x = 133;
                break;
            case 'right':
                this.position.fire.x += 33;
                this.position.sprite.x = 199;
                break;
            case 'bottom':
                this.position.fire.y += 33;
                this.position.sprite.x = 232;
                break;
            case 'left':
                this.position.fire.x -= 33;
                this.position.sprite.x = 166;
                break;
        }
    }
});