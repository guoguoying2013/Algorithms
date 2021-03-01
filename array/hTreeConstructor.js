/*

recursion helper function
    base case:
        current Depth > given depth
        return

    recursive case:
        input: center coordinates, length
        increase depth by 1
        draw one H
        draw 3 lines
        caculate 4 end points

        depth for next level
        four new centers
            recursiveFunc(newCenter, newDepth)

*/

const drawHTree = (coordinates, len, dep) => {

    const drawH = (centerCoord, length, depth) => {
        if(depth > dep) {
            return;
        }

        let x = centerCoord[0];
        let y = centerCoord[1];

        let lineHleftPoint = [x - length/2, y];
        let lineHRightPoint = [x + length/2, y];
        drawLine(lineHleftPoint, lineHRightPoint);

        let lineVleftUpPoint = [x - length/2, y + length/2];
        let lineVleftDownPoint = [x - length/2, y - length/2];
        drawLine(lineVleftUpPoint, lineVleftDownPoint);

        let lineVRightUpPoint = [x + length/2, y + length/2];
        let lineVRightDownPoint = [x + length/2, y - length/2];
        drawLine(lineVRightUpPoint, lineVRightDownPoint);

        depth++;
        let newLen = Math.sqrt(length);

        drawH(lineVleftUpPoint, newLen, depth);
        drawH(lineVleftDownPoint, newLen, depth);
        drawH(lineVRightUpPoint, newLen, depth);
        drawH(lineVRightDownPoint, newLen, depth);
    }

    drawH(coordinates, len, 1);

};

const drawLine = (pointA, pointB) => {
    console.log(pointA, '---', pointB);
}

drawHTree([0, 0], 16, 2)