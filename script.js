// FOR LOOP
function showFor() {
   let num = document.getElementById("forNum").value;
   let text = document.getElementById("forText").value;
   let output = document.getElementById("forOutput");
   output.innerHTML = "";
   for (let i = 1; i <= num; i++) {
       output.innerHTML += "<li>" + text + "</li>";
   }
}
function clearFor() {
   document.getElementById("forOutput").innerHTML = "";
}

// WHILE LOOP
function showWhile() {
   let num = document.getElementById("whileNum").value;
   let text = document.getElementById("whileText").value;
   let output = document.getElementById("whileOutput");
   output.innerHTML = "";
   let i = 1;
   while (i <= num) {
       output.innerHTML += "<li>" + text + "</li>";
       i++;
   }
}
function clearWhile() {
   document.getElementById("whileOutput").innerHTML = "";
}

// DO-WHILE LOOP
function showDoWhile() {
   let num = document.getElementById("doNum").value;
   let text = document.getElementById("doText").value;
   let output = document.getElementById("doOutput");
   output.innerHTML = "";
   let i = 1;
   do {
       output.innerHTML += "<li>" + text + "</li>";
       i++;
   } while (i <= num);
}
function clearDo() {
   document.getElementById("doOutput").innerHTML = "";
}