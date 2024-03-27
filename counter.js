//COUNTER PROGRAM
//Imported all documents from the HTML DOCUMENT
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countlabel");
//Count will be set to (0/Zero) by default
let count = 0;
//Function of the Increase Button
increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
};
//Function of the Decrease Button
decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
};
//Function of the Reset Button
resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
};