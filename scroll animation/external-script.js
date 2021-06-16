function checkBoxes() {
  // const triggerBottom = window.innerHeight / 5 * 4;

  // boxes.forEach((box, i) => {
  //   const boxTop = box.getBoundingClientRect().top;

  //   console.log(i, boxTop);

  //   if (boxTop < triggerBottom) {
  //     box.classList.add('show');
  //   } else {
  //     box.classList.remove('show');
  //   }
  // })
  const boxes = document.querySelectorAll('.box');
  showElements(boxes);

  showElements(document.querySelectorAll('.other-box'));
}


function showElements(
  elements = [], // NodeList
  triggerDistance = window.innerHeight / 5 * 4
) {
  elements.forEach((box, i) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerDistance) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}