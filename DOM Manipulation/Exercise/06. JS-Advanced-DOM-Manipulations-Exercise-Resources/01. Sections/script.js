function create(words) {
   let content = document.getElementById('content');

   words.forEach(el => {
      let div = document.createElement('div');
      let p = document.createElement('p');

      p.innerHTML = el;
      p.style.display = 'none';
      div.appendChild(p);
      content.appendChild(div);
   });

   content.addEventListener('click', (e) => {
         let curDiv = e.target;
         let selectedP = curDiv.firstElementChild;
         selectedP.style.display = 'block';
   });
}