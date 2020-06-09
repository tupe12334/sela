let obj1 = new Object;

const inputElement = document.getElementById("name-Enter");

const submitBo = document.getElementById("submit-B");
submitBo.addEventListener("click", function () {
    console.log("HI");
    obj1.name = inputElement.value;
    helloDiv.innerText = "hello: " + obj1.name;
    alert("hello: "+obj1.name)
});
const helloDiv = document.getElementById("hello");
