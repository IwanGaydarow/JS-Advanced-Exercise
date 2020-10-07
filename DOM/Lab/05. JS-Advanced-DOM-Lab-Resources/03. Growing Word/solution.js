function growingWord() {
  let p = document.querySelector("#exercise p");
  let color = p.style.color;
  let size = parseInt(p.style.fontSize);

  if (size > 0) {
    let divEl = document.getElementById(color + "Div");
    let check = divEl.nextElementSibling;
    if (check !== null) {
      size = size * 2;
      color = check.textContent;
    } else {
      size = size * 2;
      color = document.getElementById('colors').firstElementChild.textContent;
    }
    p.style.color = color;
    p.style.fontSize = size + "px";
  }
  else {
    p.style.color = "blue";
    p.style.fontSize = 2 + "px";
  }
}