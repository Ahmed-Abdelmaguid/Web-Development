var but = document.querySelector("button");
var bodyChanged = false;


// but.addEventListener("click", function () {
//     if (bodyChanged) {
//         document.body.style.backgroundColor = "white";
//     } else {
//         document.body.style.backgroundColor = "purple";
//     }
//     bodyChanged = !bodyChanged;
// })

but.addEventListener("click", function () {
    document.body.classList.toggle("purple");
})