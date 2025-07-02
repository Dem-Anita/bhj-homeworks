document.addEventListener('DOMContentLoaded', function() {
  const cart = document.querySelector('.cart__products');

  document.querySelectorAll('.product__quantity-control').forEach(control => {
    control.addEventListener('click', function() {
      const controls = this.closest('.product__quantity-controls');
      const valueElement = controls.querySelector('.product__quantity-value');
      let value = parseInt(valueElement.textContent);
      
      if (this.classList.contains('product__quantity-control_dec')) {
        value = Math.max(1, value - 1);
      } else if (this.classList.contains('product__quantity-control_inc')) {
        value += 1;
      }
      
      valueElement.textContent = value;
    });
  });

  document.querySelectorAll('.product__add').forEach(button => {
    button.addEventListener('click', function() {
      const product = this.closest('.product');
      const id = product.dataset.id;
      const count = parseInt(product.querySelector('.product__quantity-value').textContent);
      const imageSrc = product.querySelector('.product__image').src;
      
      addToCart(id, imageSrc, count);
    });
  });
  

  function addToCart(id, imageSrc, count) {
    const existingProduct = cart.querySelector(`.cart__product[data-id="${id}"]`);
    
    if (existingProduct) {
      const currentCount = parseInt(existingProduct.querySelector('.cart__product-count').textContent);
      existingProduct.querySelector('.cart__product-count').textContent = currentCount + count;
    } else {
      const cartProduct = document.createElement('div');
      cartProduct.className = 'cart__product';
      cartProduct.dataset.id = id;
      
      cartProduct.innerHTML = `
        <img class="cart__product-image" src="${imageSrc}">
        <div class="cart__product-count">${count}</div>
      `;
      
      cart.appendChild(cartProduct);
    }
  }
});