const dropdownParent = document.querySelectorAll(".dropdown-parent");

dropdownParent.forEach(dropdown => {
    dropdown.addEventListener("mouseenter", () => {
        for (let child in dropdown.children) {
             if (dropdown.children[child] instanceof HTMLDivElement) {
                dropdown.children[child].classList.remove("hidden")
        }}
    });
    dropdown.addEventListener("mouseleave", () => {
        for (let child in dropdown.children) {
            if (dropdown.children[child] instanceof HTMLDivElement) {
                dropdown.children[child].classList.add("hidden")
            }
        }
    });

})
//////

// each image has an index. there is a currentIndex that changes depending according to arrows/buttons
let currentIndex = 1

function displayImage(currentIndex) {
    const currentImage = document.querySelector(`.img-container>img:nth-child(${currentIndex})`);
    currentImage.style.display = "inline";
    return currentIndex;
}


const rightIcon = document.getElementById("arrow-right")
rightIcon.addEventListener("click", showRightImage)
function showRightImage(){
    let imageWeMoveAwayFrom = document.querySelector(`.img-container>img:nth-child(${currentIndex})`)
    imageWeMoveAwayFrom.style.display = "none";
    currentIndex += 1;
    if (currentIndex > 4) {
        currentIndex = 1;
    }
    displayImage(currentIndex);
    return currentIndex;
}

const leftIcon = document.getElementById("arrow-left")
leftIcon.addEventListener("click", showLeftImage)
function showLeftImage(){
    let imageWeMoveAwayFrom = document.querySelector(`.img-container>img:nth-child(${currentIndex})`)
    imageWeMoveAwayFrom.style.display = "none";
    currentIndex -= 1;
    if (currentIndex < 1) {
        currentIndex = 4;
    }
    displayImage(currentIndex);
    return currentIndex;
}
