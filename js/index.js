
const btnNo = document.getElementById("last_btn");
function changePos(el) {
    el.style.position = "absolute";
    const randomTop = Math.floor(Math.random() * 100);  // 5 to 90
    const randomLeft = Math.floor(Math.random() * 100)

    el.style.top = `${randomTop}%`;
    el.style.left = `${randomLeft}%`;
}

btnNo.addEventListener("mouseenter", function (e) {
    changePos(e.target);
})