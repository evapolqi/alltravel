window.addEventListener('DOMContentLoaded', () => {
    let content = document.querySelector('.product_content');
    let catalog = document.querySelector('.catalog_content');
    namesFind.forEach ((item) => {
        createCard (item)
    })
    function createCard (item) {
        let card = document.createElement('div'),
        
        photo = document.createElement('img'),
        
        heading = document.createElement('h1'),
        
        description = document.createElement('p'),
        
        productPrice = document.createElement('div'),
        
        productOldPrice = document.createElement('div'),
        
        taglinePrice = document.createElement('p'),
        
        taglineCross = document.createElement('s'),
        
        productButton = document.createElement('button');
        
        card.classList.add('product');
        
        photo.classList.add('product_image');
        photo.src = item.src;
        
        heading.classList.add('product_subject');
        heading.innerHTML = item.heading;
        
        description.classList.add('product_description');
        description.innerHTML = item.description;
        
        productPrice.classList.add('product_box_price');
        
        productOldPrice.classList.add('product_box_price_correct');
        
        taglinePrice.classList.add('product_tagline');
        taglinePrice.innerHTML = item.price;
        
        taglineCross.classList.add('product_tagline_cross');
        taglineCross.innerHTML = item.oldPrice;
        
        productButton.classList.add('product_button');
        productButton.innerHTML = item.button;
        productButton.onclick = () => 
            putCard(item.id);
        
        
        content.appendChild(card);
        
        card.appendChild(photo);
        
        card.appendChild(heading);
        
        card.appendChild(description);
        
        card.appendChild(productPrice);
        
        productPrice.appendChild(productOldPrice);
        
        productOldPrice.appendChild(taglinePrice);
        
        productOldPrice.appendChild(taglineCross);
        
        productPrice.appendChild(productButton);
    if(item.isPopular === true) {
        content.appendChild(card);
    } else {
        catalog.appendChild(card);
    }
    }
})
// let text = document.createElement('h1');
// text.innerHTML = 'iwjhff';
// document.body.appendChild(text)
