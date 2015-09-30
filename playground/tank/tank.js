define([
    'state/dict',
    './move',
    './sprite'
], function(dict, tankMove, tankSprite) {
    return function(type, playground, userControl) {
        this.type = 'tank:' + type;
        this.zIndex = 2;

        this.playground = playground;
        this.userControl = userControl;

        this.position = {
            tank: {
                x: 100,
                y: 100,
                dir: 'bottom'
            },
            sprite: {
                x: 529,
                y: 67,
                shot: 0
            }
        };

        this.draw = function() {
            this.hideMatrix = this.hideMatrix || {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
            playground.draw(this.position.sprite.x, this.position.sprite.y, this.position.tank.x, this.position.tank.y);
        }.bind(this);

        this.setPosition = function(x, y) {
            this.position.tank.x = x;
            this.position.tank.y = y;
        };

        tankMove.init(this);
        tankSprite.init(this);
    }
});