define(function() {
    var isCollision;

    function check(direction, movePositionX, movePositionY, unit, step) {
        var staticPositionX = unit.position.unit.x;
        var staticPositionY = unit.position.unit.y;
        var affect = unit.affect;

        switch(direction) {
            case 'top':
                isCollision = movePositionY - staticPositionY <= step && movePositionY - staticPositionY > -step &&
                movePositionX - staticPositionX > -step && movePositionX - staticPositionX < step;
                return isCollision ? affect || true : false;
                break;
            case 'right':
                isCollision = movePositionX - staticPositionX >= -step && movePositionX - staticPositionX < step &&
                movePositionY - staticPositionY > -step && movePositionY - staticPositionY < step;
                return isCollision ? affect || true : false;
                break;
            case 'bottom':
                isCollision = movePositionY - staticPositionY >= -step && movePositionY - staticPositionY < step &&
                movePositionX - staticPositionX > -step && movePositionX - staticPositionX < step;
                return isCollision ? affect || true : false;
                break;
            case 'left':
                isCollision = movePositionX - staticPositionX <= step && movePositionX - staticPositionX > -step &&
                movePositionY - staticPositionY > -step && movePositionY - staticPositionY < step;
                return isCollision ? affect || true : false;
                break;
        }
    }

    return function(playground, typeFireEvent, checkEl, step) {
        return playground.units.map(function(unit) {
            if (!/tank|fire/.test(unit.type)) {
                isCollision = check(typeFireEvent, checkEl.position.unit.x, checkEl.position.unit.y, unit, step);
                return {
                    type: isCollision,
                    unit: unit
                }
            }
        }.bind(this)).filter(function(rec) {
            return rec !== undefined && rec.type !== undefined && rec.type !== false
        })
    }
});