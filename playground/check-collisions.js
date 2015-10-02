define(function() {
    var typeAffected = {
        brick: 'stop',
        water: 'slow'
    };

    var isCollision;

    function check(direction, movePositionX, movePositionY, staticPositionX, staticPositionY, staticType, step) {
        switch(direction) {
            case 'top':
                isCollision = movePositionY - staticPositionY <= step && movePositionY - staticPositionY > -step &&
                movePositionX - staticPositionX > -step && movePositionX - staticPositionX < step;
                return isCollision ? typeAffected[staticType] || true : false;
                break;
            case 'right':
                isCollision = movePositionX - staticPositionX >= -step && movePositionX - staticPositionX < step &&
                movePositionY - staticPositionY > -step && movePositionY - staticPositionY < step;
                return isCollision ? typeAffected[staticType] || true : false;
                break;
            case 'bottom':
                isCollision = movePositionY - staticPositionY >= -step && movePositionY - staticPositionY < step &&
                movePositionX - staticPositionX > -step && movePositionX - staticPositionX < step;
                return isCollision ? typeAffected[staticType] || true : false;
                break;
            case 'left':
                isCollision = movePositionX - staticPositionX <= step && movePositionX - staticPositionX > -step &&
                movePositionY - staticPositionY > -step && movePositionY - staticPositionY < step;
                return isCollision ? typeAffected[staticType] || true : false;
                break;
        }
    }

    return function(playground, typeFireEvent, checkEl, step) {
        return playground.units.map(function(unit) {
            if (!/tank|fire/.test(unit.type)) {
                isCollision = check(typeFireEvent, checkEl.position.unit.x, checkEl.position.unit.y, unit.position.unit.x, unit.position.unit.y, unit.type, step);
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