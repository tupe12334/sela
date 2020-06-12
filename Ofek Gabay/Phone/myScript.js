/*let body = document.getElementById("body");

for (let index = 0; index < 8; index++) {
    let button = document.createElement("index");
    body.appendChild(button);
}
*/
const phoneLine = document.getElementById("thePhoneNumberLine");
const deletButton = document.getElementById("delet")
deletButton.addEventListener("click",function () {
    let theText = phoneLine.innerText;
    if (theText.length==1) {
        return null;
    }
    else{
    
        theText = theText.substring(0,theText.length-1);
    }
    phoneLine.innerText = theText;
})
const clearButton = document.getElementById("clearB")
clearButton.addEventListener("click",function(){
    phoneLine.innerText ="0";
})

const phoneButton = document.getElementsByClassName("phoneButton");
for (let index = 0; index < phoneButton.length; index++) {
    phoneButton[index].addEventListener("click",function(){
        console.log(this.value);
        if (phoneLine.innerText.length>9) {
            alert("to mach numbers!")
        }
        else{
            phoneLine.textContent+=this.value;
        }
    })
}

const dailingButton = document.getElementById("dailing-button");
dailingButton.addEventListener("click", function(){
    if (phoneLine.innerText.length===10) {
        window.location.href="tel:"+phoneLine.innerText;
    }
    else{
        alert("not enaf numbers");
    }
})



mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));

