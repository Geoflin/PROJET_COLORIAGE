const uls = document.getElementsByTagName('ul');
const h1 = document.getElementsByTagName('h1');
const nav = document.getElementsByTagName('nav');

changeColor = (ev) => {
  const color = ev.target.value;
  for (let i = 0; i < uls.length; i++) {
    uls.item(i).style.background= color;
  }

  for (let i = 0; i < h1.length; i++) {
    h1.item(i).style.background= color;
  }

  for (let i = 0; i < nav.length; i++) {
    nav.item(i).style.borderColor = color;
  }
}

colorpicker.addEventListener('change', changeColor);