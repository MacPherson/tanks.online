define([
    './move',
    './sprite',
    'playground/control'
], function(tankMoveManager, spriteManager, controlManager) {

    function Tank(type) {
        this.type = 'tank:' + type;
        this.zIndex = 1;
        this.DEFAULT_SPEED = 3;
        this.speed = this.DEFAULT_SPEED;

        this.position = {
            unit: {
                x: null,
                y: null,
                dir: null
            },
            sprite: {
                x: null,
                y: null,
                shot: null
            }
        };

        this.initControl = tankMoveManager;
        this.initSpriteManager = spriteManager;
        this.controlManager = controlManager;

        this.initControl();
        this.initSpriteManager();
    };

    return function(type, playground, collisions) {

        Tank.prototype.playground = playground;
        Tank.prototype.checkCollisions = collisions;

        return new Tank(type);
    }
});