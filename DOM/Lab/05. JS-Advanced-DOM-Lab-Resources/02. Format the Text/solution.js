function solve() {
  let content = document.getElementById('input').textContent.split('.');
  let output = document.getElementById('output');
  let createPar = function (par) {
    let p = document.createElement('p');
    p.textContent = par;
    output.appendChild(p);
  }
  let par = '';

  if (content.length > 3) {
    for (let i = 0; i < content.length; i++) {
      if (i % 3 == 0) {
        createPar(par);

        par = '';
      }

      par += content[i] + '.';
    }

    if (par !== '') {
      createPar(par);
    }
  }
  else if (content.length > 0) {
    content.forEach(x => par + (x + '.'));

    createPar(par);
  }
}