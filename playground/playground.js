define([
    'state/dict',
    './resources/index'
], function(dict, resources) {
    return function() {
        var canvas = document.createElement('canvas');
        var canvasContext = canvas.getContext('2d');
        canvas.width = dict.canvas.WIDTH;
        canvas.height = dict.canvas.HEIGHT;
        playground = this;

        function render() {
            requestAnimationFrame(render.bind(this));
            canvasContext.clearRect(0, 0, dict.canvas.WIDTH, dict.canvas.HEIGHT);
            this.units.sort(function(prev, next) {
                return prev.zIndex - next.zIndex
            }).forEach(function(unit) {
                unit.draw();
            });
        }

        function applyFirstPositions() {
            var positionMatrix = new Array(parseInt((dict.canvas.WIDTH / 45) * (dict.canvas.HEIGHT / 45)) - this.units.length).join(0).split('').map(Number);
            positionMatrix = positionMatrix.concat(this.units);
            positionMatrix = positionMatrix.sort(function() {
                return Math.random() - 0.5
            });
            positionMatrix.forEach(function(pos, index) {
                if (pos) {
                    pos.setPosition(
                        Math.floor(index % (dict.canvas.WIDTH / 45)) * 45,
                        Math.floor(index / (dict.canvas.WIDTH / 45)) * 45
                    );
                    if (pos.type.indexOf('tank') > -1) {
                        pos.position.unit.dir = ['top', 'right', 'bottom', 'left'][parseInt(Math.random() * 4)];
                        pos.changeSpritePosition(pos.position.unit.dir);
                    }
                }
            });
        }

        this.el = canvas;
        this.units = [];
        this.add = function(unit) {
            this.units.push(unit);
        };
        this.start = function() {
            applyFirstPositions.call(this);
            render.call(this);
        }.bind(this);
        this.draw = function(spriteX, spriteY, positionX, positionY) {
            resources.get(function(sprite) {
                canvasContext.drawImage(sprite, spriteX, spriteY, 30, 30, positionX, positionY, 45, 45);
            });
        };
    };
});