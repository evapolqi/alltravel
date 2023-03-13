window.addEventListener('DOMContentLoaded', () => {
    let basket = document.querySelector('.order');
    let send = getCard();
    send.forEach (id => {
      const item = namesFind.find((item) => item.id === id)
                createCard (item)
            
    })
    
function createCard (item) {
  let card = document.createElement('div'),
        
  photo = document.createElement('img'),
  
  info = document.createElement('div'),

  heading = document.createElement('h1'),
  
  description = document.createElement('p'),
  
  taglinePrice = document.createElement('p'),

  amount = document.createElement('input');

  card.classList.add('order');

        photo.classList.add('order_pic');
        photo.src = item.src;
        
        info.classList.add('order_all');

        heading.classList.add('order_maintext');
        heading.innerHTML = item.heading;
        
        description.classList.add('order_description');
        description.innerHTML = item.description;

        taglinePrice.classList.add('order_price');
        taglinePrice.innerHTML = item.price;

        amount.classList.add('order_number');
        amount.setAttribute('type', 'number');

        basket.appendChild(card);

        card.appendChild(photo);
        
        card.appendChild(info);

        info.appendChild(heading);
        
        info.appendChild(description);
        
        info.appendChild(taglinePrice);
        
        card.appendChild(amount);

        console.log(photo.src);
}

let clear = document.querySelector('.form_clear');
localStorage.setItem('basket', JSON.stringify(send));
clear.addEventListener('click', () => {
  localStorage.removeItem('basket');
  this.location.reload();
})
})
let result = document.querySelector('.offer_amount');
function count() {
  let send = getCard();
  let calc=0;
  send.forEach(id => {
    const amount = namesFind.find((item) => item.id === id)
          calc+=amount.price;
          console.log(amount.price);    
  })
  result.innerHTML = `Итого: ${calc}`;
}
count();