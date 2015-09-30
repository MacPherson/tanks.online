define(function() {
    return function(positionX, positionY, positionCheckElX, positionCheckElY) {
        var isY = positionY - positionCheckElY <= 45 && positionY - positionCheckElY > -45 &&
            positionX - positionCheckElX > -45 && positionX - positionCheckElX < 45;

        var isX = positionX - positionCheckElX >= -45 && positionX - positionCheckElX < 45 &&
            positionY - positionCheckElY > -45 && positionY - positionCheckElY < 45;

        var collY = positionY - positionCheckElY >= 0 ? [positionY - positionCheckElY, 45] : [0, 45 + positionY - positionCheckElY];

        var collX = positionX - positionCheckElX >= 0 ? [positionX - positionCheckElX, 45] : [0, 45 + positionX - positionCheckElX];

        return {
            is: isY || isX,
            matrix: {
                x: collX[0],
                y: collY[0],
                width: collX[1] - collX[0],
                height: collY[1] - collY[0]
            }
        };
    }
});