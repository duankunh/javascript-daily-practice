const decreaseBth = document.getElementById("decreaseBtn")
const resetBth = document.getElementById("resetBtn")
const increaseBth = document.getElementById("increaseBtn")
const countLabel = document.getElementById("countLabel")
let count = 0;

increaseBth.onclick = function(){
    count ++;
    countLabel.textContent = count;
}

decreaseBth.onclick = function(){
    count --;
    countLabel.textContent = count;
}
resetBth.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}