function solve() {
   let add = document.getElementsByClassName('shopping-cart')[0];
   let textArea = document.querySelector('textarea');
   let checkout = document.querySelector('button.checkout');
   let buttons = document.querySelectorAll('button.add-product');

   let bought = {};

   add.addEventListener('click', (e) => {
      if(e.target.className === 'add-product'){
         let product = e.path[2];
         let first = product.firstElementChild;
         let detail = first.nextElementSibling;
         let name = detail.firstElementChild.innerHTML;

         let price = product.lastElementChild.innerHTML;

         textArea.innerHTML = textArea.innerHTML + `Added ${name} for ${price} to the cart.\n`;
         
         if(!bought[name]){
            bought[name] = price++;
         } else {
            bought[name] += price++;
         }
      }
   });

   checkout.addEventListener('click', () => {
      let names = (Object.keys(bought)).join(', ');
      let totalPrice = Object.values(bought).reduce((a, b) => a + b);

      textArea.innerHTML = textArea.innerHTML + `You bought ${names} for ${totalPrice.toFixed(2)}.`;

      for (let i = 0; i < buttons.length; i++) {
         let curBtn = buttons[i];
         curBtn.disabled = true;
      }

      checkout.disabled = true;
   });
}