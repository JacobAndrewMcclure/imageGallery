//get modal
let modal = document.getElementById("myModal");
//get button that opens modal
let openModal = document.querySelectorAll(".openModal");
//get span element that closes modal
let span = document.getElementsByClassName("close")[0];

//assigns event listener to all class items
for (i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", expandImg)
}

//button press opens modal
function expandImg(event) {
    let image = event.target;
    modal.style.display = "block";
    image.src = this.src;
    console.log(image.src);
}
//X "span" click closes modal
span.onclick = function() {
    modal.style.display = "none";
}
//User clicks outside of modal it'll close
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}