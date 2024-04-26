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
// const child = document.querySelector(`.img-container:nth-child(${currentIndex})`);

function displayImage(currentIndex) {
    const currentImage = document.querySelector(`.img-container>img:nth-child(${currentIndex})`);
    currentImage.style.display = "inline";
    return currentIndex;
}

const test = document.createElement("div");
test.innerHTML = "test";
let container = document.getElementById("test-container")
container.appendChild(test)

test.addEventListener("click", shownNextImage)
function shownNextImage(){
    let previousImage = document.querySelector(`.img-container>img:nth-child(${currentIndex})`)
    previousImage.style.display = "none";
    currentIndex += 1;
    console.log(currentIndex)
    if (currentIndex > 4) {
        currentIndex = 1;
    }
    else if (currentIndex < 1) {
        currentIndex = 4;
    }
    console.log(currentIndex)

    displayImage(currentIndex)
    return currentIndex
}