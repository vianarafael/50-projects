const next = document.getElementById('next');
const prev = document.getElementById('prev');

const progress = document.querySelector('.progress');

let currProgress = 0;

next.addEventListener('click', () => {
  console.log(currProgress);

  if (currProgress < 99) {
    currProgress += 33;
    progress.style.width = `${currProgress}%`;
    prev.disabled = false;
  }
  if (currProgress >= 99) {
    next.disabled = true;
  }
});

prev.addEventListener('click', () => {
  console.log(currProgress);
  if (currProgress > 0) {
    currProgress -= 33;
    next.disabled = false;
    progress.style.width = `${currProgress}%`;
  }
  if (currProgress <= 0) {
    prev.disabled = true;
  }
});
