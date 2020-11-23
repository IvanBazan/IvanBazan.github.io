var     xTarget,
        yTarget,
        zTarget,
        currentX,
        currentY,
        currentZ;

var ver = document.getElementById("ver");
var hor = document.getElementById("hor");
var dia = document.getElementById("dia");

currentX = window.innerWidth / 100 * parseInt(ver.getAttribute('x1'));
currentY = window.innerHeight / 100 * parseInt(ver.getAttribute('y1'));
currentZ = window.innerHeight / 100 * parseInt(dia.getAttribute('y2'));

zTarget = currentZ;

var amt = 0.03;

var body = document.querySelector('body')

function printMousePos(event) {
    console.log("clientX: " + event.clientX +
        " - clientY: " + event.clientY);
    xTarget = event.clientX;
    yTarget = event.clientY;
    window.requestAnimationFrame(step);
}
document.addEventListener("click", printMousePos);


function step() {
    moveRepere();
    window.requestAnimationFrame(step);
}

function moveRepere() {
    // var topElementsHeight = currentY;

    if (
        Math.round(currentY * 1000) / 1000 !== Math.round(yTarget * 1000) / 1000 ||
        Math.round(currentX * 1000) / 1000 !== Math.round(xTarget * 1000) / 1000
    ) {
        currentX = lerp(currentX, xTarget, amt);
        ver.setAttribute("x1", currentX);
        ver.setAttribute("x2", currentX);
        hor.setAttribute("x1", currentX);
        dia.setAttribute("x1", currentX);
        // navigation.style.setProperty("width", currentX.toString() + "px");
        // topContent.style.setProperty("width", containerWidth.toString() + "px");

        // bottomContent.style.setProperty("width", containerWidth.toString() + "px");
        // detailContent.style.setProperty("width", containerWidth.toString() + "px");

        currentY = lerp(currentY, yTarget, amt);
        ver.setAttribute("y1", currentY);
        hor.setAttribute("y1", currentY);
        hor.setAttribute("y2", currentY);
        dia.setAttribute("y1", currentY);

        // navigation.style.setProperty("height", currentY.toString() + "px");
        // if (!mobileView) {
        //     topContent.style.setProperty("height", currentY.toString() + "px");
        // } else if (kontaktViewActive) {
        //     topContent.style.setProperty("height", "50vh");
        // } else {
        //     topContent.style.setProperty("height", "100vh");
        // }
        //
        // bottomWrapper.style.setProperty("height", bottomHeight.toString() + "px");
        // detailContent.style.setProperty("height", bottomHeight.toString() + "px");
        // if (mobileView && kontaktViewActive) {
        //     detailContent.style.setProperty("height", (window.innerHeight / 2).toString() + "px");
        //     detailContent.style.setProperty("margin-top", (window.innerHeight / 2).toString() + "px");
        // }
    }
    // if (Math.round(currentZ * 1000) / 1000 !== zTarget) {
    //     currentZ = lerp(currentZ, zTarget, amt);
    //     dia.setAttribute("y2", currentZ);
    // }
}

function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}