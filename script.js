
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
//initializing buttons
btn1.onclick = Submit1;
btn2.onclick = Submit2;
btn3.onclick = Submit3;
function Submit1() {
    btn1.innerText = "wait please...";
    btn2.innerText = "XXXXXX...";
    btn3.innerText = "XXXXXX...";
    box_mss1.innerText = "thank you for choosing me";
    box_mss2.innerText = "Try me next time";
    box_mss3.innerText = "Try me next time";
    alert("do you want choose one");

}
function Submit2() {
    btn2.innerText = "wait please...";
    btn1.innerText = "XXXXXX...";
    btn3.innerText = "XXXXXX...";
    box_mss2.innerText = "thank you for choosing me";
    box_mss1.innerText = "Try me next time";
    box_mss3.innerText = "Try me next time";

}
function Submit3() {
    btn3.innerText = "wait please...";
    btn2.innerText = "XXXXXX...";
    btn1.innerText = "XXXXXX...";
    box_mss3.innerText = "thank you for choosing me";
    box_mss2.innerText = "Try me next time";
    box_mss1.innerText = "Try me next time";

}


