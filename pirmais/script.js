function calculateLinolium() {
    let roomWidth = parseFloat(document.getElementById("roomWidth").value);
    let roomLeght = parseFloat(document.getElementById("roomLeght").value);
    let linoliumWidth = parseFloat(document.getElementById("linoliumWidth").value);
    let linoliumPrice = parseFloat(document.getElementById("linoliumPrice").value);



     let stripsNeededCross = Math.ceil(roomLenght/linoliumWidth);
    let linoliumLenghtCross = stripsNeededCross * roomWidth;
    let linoliumAreaCross = linoliumLenghtCross * linoliumWidth;
    let costCross = linoliumAreaCross * linoliumPrice;
    let wasteCross = linoliumAreaCross - (roomWidth*roomLenght);
    let wasteCostCross = wasteCross * linoliumPrice;

     document.getElementById("lengthCross").value = linoliumLenghtCross.toFixed(2) + " m";
    document.getElementById("costCross").value = costCross.toFixed(2) + " EUR";
    document.getElementById("wasteCross").value = wasteCross.toFixed(2) + " m2";
    document.getElementById("wasteCostCross").value = wasteCostCross.toFixed(2) + " EUR";


}