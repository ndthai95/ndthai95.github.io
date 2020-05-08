let h3 = document.getElementsByTagName('h3')[0];
h3.style.color = "red";
h3.classList.add("bgr");

function buttonClick() {
    alert("k");
}
function number() {
    let number = document.getElementById('number');
    console.log(Number(0));
    
    if (Number(number.value)) {
        if (Number(number.value) % 2 == 0) {
            alert("So chan");
        } else {
            alert("So le");
        }
    }
}