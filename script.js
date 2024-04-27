let timeoutId;
const dropdownParent = document.querySelectorAll('.dropdown-parent');

dropdownParent.forEach((dropdown) => {
  dropdown.addEventListener('mouseenter', () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const child in dropdown.children) {
      if (dropdown.children[child] instanceof HTMLDivElement) {
        dropdown.children[child].classList.remove('hidden');
      }
    }
  });
  dropdown.addEventListener('mouseleave', () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const child in dropdown.children) {
      if (dropdown.children[child] instanceof HTMLDivElement) {
        dropdown.children[child].classList.add('hidden');
      }
    }
  });
});

let currentIndex = 1;
function displayImage(index) {
  const currentImage = document.querySelector(
    `.img-container>img:nth-child(${index})`,
  );
  currentImage.style.display = 'inline';
  return currentIndex;
}

const rightIcon = document.getElementById('arrow-right');
function showRightImage() {
  clearTimeout(timeoutId);
  const imageWeMoveAwayFrom = document.querySelector(
    `.img-container>img:nth-child(${currentIndex})`,
  );
  imageWeMoveAwayFrom.style.display = 'none';
  currentIndex += 1;
  if (currentIndex > 4) {
    currentIndex = 1;
  }
  displayImage(currentIndex);
  delayTimer(showRightImage);
  return currentIndex;
}
rightIcon.addEventListener('click', showRightImage);

function delayTimer(callback) {
  timeoutId = setTimeout(callback, 5000);
}
delayTimer();

const leftIcon = document.getElementById('arrow-left');
function showLeftImage() {
  clearTimeout(timeoutId);
  const imageWeMoveAwayFrom = document.querySelector(
    `.img-container>img:nth-child(${currentIndex})`,
  );
  imageWeMoveAwayFrom.style.display = 'none';
  currentIndex -= 1;
  if (currentIndex < 1) {
    currentIndex = 4;
  }
  displayImage(currentIndex);
  delayTimer();
  return currentIndex;
}
leftIcon.addEventListener('click', showLeftImage);

const indexIcons = document.querySelectorAll('.index-icon');
indexIcons.forEach((icon, forEachIndex) => {
  icon.addEventListener('click', () => {
    clearTimeout(timeoutId);
    const imageWeMoveAwayFrom = document.querySelector(
      `.img-container>img:nth-child(${currentIndex})`,
    );
    imageWeMoveAwayFrom.style.display = 'none';
    currentIndex = forEachIndex + 1;
    displayImage(currentIndex);
    delayTimer();
    return currentIndex;
  });
});
