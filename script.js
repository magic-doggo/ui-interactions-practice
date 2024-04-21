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
