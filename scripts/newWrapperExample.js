// var m = 18;
//
// var h,
//     w,
//     a,
//     b,
//     xTarget,
//     yTarget,
//     zTarget,
//     currentX,
//     currentY,
//     currentZ,
//     topTarget,
//     currentTop,
//     projectsActive,
//     detailViewActive,
//     detailTextExtended,
//     kontaktViewActive,
//     infoPanelActive,
//     isMobile,
//     currentBottom,
//     currentBottomLeft,
//     bottomHeight,
//     bottomTarget,
//     leftBottomTarget,
//     detailsTopTarget,
//     currentGallery,
//     currentDetails,
//     detailsTarget;
//
// var ver = document.getElementById("ver");
// var hor = document.getElementById("hor");
// var dia = document.getElementById("dia");
// var navigation = document.getElementById("navigation");
// var topContent = document.getElementById("topContent");
// var topWrapper = document.getElementById("topWrapper");
// var topHome = document.getElementById("topHome");
// var topProjects = document.getElementById("topProjects");
// var topAtelier = document.getElementById("topAtelier");
// var activeTop = topHome;
// var bottomWrapper = document.getElementById("bottomWrapper");
// var detailContent = document.getElementById("detailContent");
// var backBtn = document.getElementById("backBtn");
// var topDetailContent = document.getElementById("topDetailContent");
//
// var topElements = [topHome, topProjects, topAtelier];
// resetOnPosition();
//
// var onPositionCount = 0;
// var slideIndex = 1;
//
// // these values define top-left proportion for resizing
// var relW = 0.35;
// var relH = 0.37;
//
// // values for mobile sizes
// var containerWidth = 0;
//
// // bool for mobileView
// var mobileView = false;
//
// // Initial Size
// projectsActive = false;
// detailViewActive = false;
// detailTextExtended = false;
// kontaktViewActive = false;
// infoPanelActive = false;
// resizeContent();
//
// currentX = xTarget + 2;
// currentY = yTarget + 2;
// currentZ = zTarget + 2;
// topTarget = 70;
// currentTop = topTarget + 0.1;
// bottomTarget = window.innerHeight;
// currentBottom = window.innerHeight;
// currentBottomLeft = 0;
// leftBottomTarget = 0;
// bottomHeight = 0;
// currentGallery = 0;
// currentDetails = 100;
// currentDetailsTop = bottomTarget;
// detailsTarget = 100;
//
// var marginLeft = 0;
// var marginTop = 0;
// var marginLeftTarget = 0;
// var marginTopTarget = 0;
//
// var firstStart = true;
// var goalReached = false;
//
// var amt = 0.1;
//
// function UpdateUI() {
//     // if (!mobileView && window.innerWidth < 850) {
//     //     // switching to mobile view
//     //     mobileView = true;
//     //     // toggleMobileMenu("topProjects");
//     //     document.getElementById("topContent").style.setProperty("display", "none");
//     //     bottomTarget = 0;
//     //     moveTopContent("topProjects");
//     //     projectsActive = true;
//     //     resetOnPosition();
//     //     // mobileNavMenuBtn.style.setProperty("opacity", "1");
//     //     // resizeContent();
//     //     resizeContent();
//     //     console.log("mobile View active");
//     // }
//     if (mobileView && window.innerWidth > 850) {
//         //  switching to desktop view
//         mobileView = false;
//         resizeContent();
//         console.log("desktop View active");
//         document.getElementById("topContent").style.setProperty("display", "block");
//     }
//
//     // Change size of top containers if mobile View
//     var topElementsHeight = currentY;
//     // bottomHeight = window.innerHeight - yTarget;
//     // if (mobileView) {
//     //   containerWidth = window.innerWidth;
//     //   topElementsHeight = 330;
//     //   leftBottomTarget = 0;
//     //   bottomHeight = window.innerHeight;
//     // }
//
//     if (
//         Math.round(currentY * 1000) / 1000 !== Math.round(yTarget * 1000) / 1000 ||
//         Math.round(currentX * 1000) / 1000 !== Math.round(xTarget * 1000) / 1000
//     ) {
//         currentX = lerp(currentX, xTarget, amt);
//         ver.setAttribute("x1", currentX);
//         ver.setAttribute("x2", currentX);
//         hor.setAttribute("x1", currentX);
//         dia.setAttribute("x1", currentX);
//         navigation.style.setProperty("width", currentX.toString() + "px");
//         topContent.style.setProperty("width", containerWidth.toString() + "px");
//
//         bottomContent.style.setProperty("width", containerWidth.toString() + "px");
//         detailContent.style.setProperty("width", containerWidth.toString() + "px");
//
//         currentY = lerp(currentY, yTarget, amt);
//         ver.setAttribute("y1", currentY);
//         hor.setAttribute("y1", currentY);
//         hor.setAttribute("y2", currentY);
//         dia.setAttribute("y1", currentY);
//         navigation.style.setProperty("height", currentY.toString() + "px");
//         if (!mobileView) {
//             topContent.style.setProperty("height", currentY.toString() + "px");
//         } else if (kontaktViewActive) {
//             topContent.style.setProperty("height", "50vh");
//         } else {
//             topContent.style.setProperty("height", "100vh");
//         }
//
//         bottomWrapper.style.setProperty("height", bottomHeight.toString() + "px");
//         detailContent.style.setProperty("height", bottomHeight.toString() + "px");
//         if (mobileView && kontaktViewActive) {
//             detailContent.style.setProperty("height", (window.innerHeight / 2).toString() + "px");
//             detailContent.style.setProperty("margin-top", (window.innerHeight / 2).toString() + "px");
//         }
//     }
//     if (Math.round(currentZ * 1000) / 1000 !== zTarget) {
//         currentZ = lerp(currentZ, zTarget, amt);
//         dia.setAttribute("y2", currentZ);
//     }
//
//     // MARGIN FOR BOTTOM-CONTENT AND DETAIL-CONTENT
//     if (Math.round(currentBottom * 1000) / 1000 !== Math.round(bottomTarget * 1000) / 1000) {
//         currentBottom = lerp(currentBottom, bottomTarget, amt);
//         bottomContent.style.setProperty("margin-top", currentBottom.toString() + "px");
//     }
//
//     if (Math.round(currentDetailsTop * 1000) / 1000 !== Math.round(detailsTopTarget * 1000) / 1000) {
//         currentDetailsTop = lerp(currentDetailsTop, detailsTopTarget, amt);
//         detailContent.style.setProperty("margin-top", currentDetailsTop.toString() + "px");
//     }
//
//     if (Math.round(currentDetails * 100) / 100 !== Math.round(detailsTarget * 100) / 100) {
//         currentDetails = lerp(currentDetails, detailsTarget, amt);
//         topDetailContent.style.setProperty("left", currentDetails.toString() + "%");
//         topProjects.style.setProperty("left", -(100 - currentDetails).toString() + "%");
//     }
//
//     // LEFT PADDING FOR BOTTOM-CONTENT AND DETAIL-CONTENT
//     if (Math.round(currentBottomLeft * 1000) / 1000 !== Math.round(leftBottomTarget * 1000) / 1000) {
//         currentBottomLeft = lerp(currentBottomLeft, leftBottomTarget, amt);
//         bottomContent.style.setProperty("padding-left", currentBottomLeft.toString() + "px");
//         detailContent.style.setProperty("padding-left", currentBottomLeft.toString() + "px");
//     }
//
//     if (onPositionCount !== topElements.length) {
//         for (var i = 0; i < topElements.length; i++) {
//             if (topElements[i].onPosition == true) {
//                 onPositionCount++;
//                 break;
//             }
//             topElements[i].style.setProperty("height", yTarget.toString() + "px");
//             // topElements[i].style.setProperty("width", containerWidth.toString() + "px");
//
//             marginTop = 0;
//             if (parseFloat(topElements[i].style.marginTop)) {
//                 marginTop = parseFloat(topElements[i].style.marginTop);
//             }
//             marginLeft = 0;
//             if (parseFloat(topElements[i].style.marginLeft)) {
//                 marginLeft = parseFloat(topElements[i].style.marginLeft);
//             }
//             marginTopTarget = 0;
//             marginLeftTarget = 0;
//             var extraSpace = 200;
//
//             if (topElements[i].classList.contains("p1")) {
//                 marginLeftTarget = containerWidth + extraSpace;
//             }
//             if (topElements[i].classList.contains("p2")) {
//                 marginTopTarget = yTarget + extraSpace;
//             }
//             if (topElements[i].classList.contains("p3")) {
//                 marginLeftTarget = -containerWidth - extraSpace;
//             }
//             if (topElements[i].classList.contains("p4")) {
//                 marginTopTarget = -yTarget - extraSpace;
//             }
//
//             if (
//                 Math.round(marginTop * 1000) / 1000 !== Math.round(marginTopTarget * 1000) / 1000 ||
//                 Math.round(marginLeft * 1000) / 1000 !== Math.round(marginLeftTarget * 1000) / 1000
//             ) {
//                 marginTop = lerp(marginTop, marginTopTarget, amt + 0.02);
//                 marginLeft = lerp(marginLeft, marginLeftTarget, amt + 0.02);
//             } else {
//                 topElements[i].onPosition = true;
//             }
//
//             if (!firstStart) {
//                 topElements[i].style.setProperty("margin-top", marginTop.toString() + "px");
//                 topElements[i].style.setProperty("margin-left", marginLeft.toString() + "px");
//             } else {
//                 topElements[i].style.setProperty("margin-top", marginTopTarget.toString() + "px");
//                 topElements[i].style.setProperty("margin-left", marginLeftTarget.toString() + "px");
//             }
//         }
//     }
// }
// function lerp(start, end, amt) {
//     return (1 - amt) * start + amt * end;
// }
// function resizeContent() {
//     // first always define width and height, proportions for top left container, on which all is based
//
//     // every value gets applied
//     if (!mobileView) {
//         xTarget = (window.innerWidth - 2 * m) * relW;
//         yTarget = (window.innerHeight - 2 * m) * relH;
//         zTarget = xTarget + yTarget;
//         bottomTarget = window.innerHeight - yTarget;
//         bottomWrapper.style.setProperty("margin-top", "0px");
//         leftBottomTarget = 0;
//         detailsTopTarget = bottomTarget;
//         detailsTarget = 100;
//         containerWidth = window.innerWidth - xTarget - 2 * 20;
//         bottomHeight = window.innerHeight - yTarget;
//         topWrapper.style.setProperty("margin-top", "0px");
//         if (projectsActive) {
//             bottomTarget = 0;
//             leftBottomTarget = xTarget;
//             document.getElementById("detailContent").style.setProperty("display", "none");
//         }
//         if (detailViewActive || kontaktViewActive) {
//             detailsTarget = 0;
//             detailsTopTarget = 0;
//             bottomTarget = window.innerHeight - yTarget;
//             document.getElementById("detailContent").style.setProperty("display", "block");
//         }
//         if (kontaktViewActive) {
//             detailsTarget = 100;
//             detailsTopTarget = 0;
//             bottomTarget = window.innerHeight - yTarget;
//             leftBottomTarget = xTarget;
//         }
//     } else {
//         yTarget = 0;
//         containerWidth = window.innerWidth;
//         bottomHeight = window.innerHeight - yTarget;
//         leftBottomTarget = 0;
//         topWrapper.style.setProperty("margin-top", "0px");
//         bottomWrapper.style.setProperty("margin-top", "0px");
//         detailsTarget = 100;
//         bottomTarget = window.innerHeight - yTarget;
//         detailsTopTarget = bottomTarget;
//         if (projectsActive) {
//             yTarget = window.innerHeight;
//             bottomTarget = 0;
//             bottomHeight = yTarget;
//             console.log("projects");
//         }
//         if (detailViewActive || kontaktViewActive) {
//             detailsTarget = 0;
//             detailsTopTarget = 0;
//             bottomTarget = window.innerHeight;
//             console.log("detail or kontakt");
//         }
//         if (kontaktViewActive) {
//             detailsTarget = 100;
//             bottomWrapper.style.setProperty("margin-top", "300px");
//             bottomHeight = (window.innerHeight - yTarget) / 2;
//             console.log("kontakt");
//         }
//     }
// }