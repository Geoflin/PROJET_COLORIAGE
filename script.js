const Row1 = document.getElementsByClassName('Row1');
const Row2 = document.getElementsByClassName('Row2');
const Row3 = document.getElementsByClassName('Row3');
const Row4 = document.getElementsByClassName('Row4');

function changeColor(ev) {
  const color = ev.target.value;

  for(let i = 0; i < Row1.length; i++){
    Row1.item(i).style.background= color;
  }
}
function changeColor2(ev) {
  const color = ev.target.value;

  for(let i = 0; i < Row2.length; i++){
    Row2.item(i).style.background= color;
  }
}
function changeColor3(ev) {
  const color = ev.target.value;

  for(let i = 0; i < Row3.length; i++){
    Row3.item(i).style.background= color;
  }
}
function changeColor4(ev) {
  const color = ev.target.value;

  for(let i = 0; i < Row4.length; i++){
    Row4.item(i).style.background= color;
  }
}

colorpicker1.addEventListener('change', changeColor);
colorpicker2.addEventListener('change', changeColor2);
colorpicker3.addEventListener('change', changeColor3);
colorpicker4.addEventListener('change', changeColor4);