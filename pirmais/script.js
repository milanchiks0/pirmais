function calculateLinolium() {
   let roomWidth = parseFloat(document.getElementById("roomwidth").value);
   let roomlenght = parseFloat(document.getElementById("roomlenght").value);
   let LinoliumWidth = parseFloat(document.getElementById("linoliumwidth").value);
   let Linoliumlenght = parseFloat(document.getElementById("linoliumwight").value); 



   let stripsNeededCross = Math.ceil(roomWidth/LinoliumWidth);
   let LinoliumlenghtCross = stripsNeededCross * roomWidth;
   let linoliumAreaCross = LinoliumlenghtCross * LinoliumWidth;
   let wasteCross = linoliumAreaCross - (roomWidth*roomlenght);
   let wasteCostCross = wasteCross * linoliumPrice;


   document.getElementById("lenghtCross").value = linoliumLenghtCross.toFixed(2) + ""
   document.getElementById("costCross").value = costCross.toFixed(2) + "EUR";
   document.getElementById("wasteCross").value = wasteCross.toFixed(2) + "m2"
   document.getElementById("wastescostCross").value = wasteCostCross.toFixed(2) + "EUR";
   


}