define(function() {
    return function(triggerEvent, positionX, positionY, positionCheckElX, positionCheckElY) {
        switch(triggerEvent) {
            case 'top':
                return positionY - positionCheckElY <= 45 && positionY - positionCheckElY > -45 &&
                    positionX - positionCheckElX > -45 && positionX - positionCheckElX < 45;
                break;
            case 'right':
                return positionX - positionCheckElX >= -45 && positionX - positionCheckElX < 45 &&
                    positionY - positionCheckElY > -45 && positionY - positionCheckElY < 45;
                break;
            case 'bottom':
                return positionY - positionCheckElY >= -45 && positionY - positionCheckElY < 45 &&
                    positionX - positionCheckElX > -45 && positionX - positionCheckElX < 45;
                break;
            case 'left':
                return positionX - positionCheckElX <= 45 && positionX - positionCheckElX > -45 &&
                    positionY - positionCheckElY > -45 && positionY - positionCheckElY < 45;
                break;
        }
    }
});