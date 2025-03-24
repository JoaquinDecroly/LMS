document.addEventListener('DOMContentLoaded', function () {
    let cartItems = [];
    const storedCart = localStorage.getItem('cart');
    cartItems = storedCart ? JSON.parse(storedCart) : [];

    const cartDiv = document.getElementById('cart-items');
    const totalPriceDiv = document.getElementById('total-price');
    const clearCartButton = document.getElementById('clear-cart');

    window.addToCart = function(imageName, price) {

        cartItems.push({ name: imageName, price: price });
        localStorage.setItem('cart', JSON.stringify(cartItems));
        console.log(`Adding "${imageName}" to cart for $${price}`);
        alert(`Se ha agregado "${imageName}" al carrito por $${price}`);

    }

    function updateCartDisplay() {
        console.log("Items in the cart:");
        cartItems.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `Artículo ${index + 1}: $${item.price.toFixed(2)}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            removeButton.addEventListener('click', function() {
                cartItems.splice(index, 1); // Remove item from array
                localStorage.setItem('cart', JSON.stringify(cartItems)); // Update local storage
                updateCartDisplay(); // Refresh display
            });
            itemDiv.appendChild(removeButton);
            cartDiv.appendChild(itemDiv);
        });


        if (cartDiv) {
            cartDiv.innerHTML = '';
            cartItems.forEach((item, index) => {
                console.log(`Item ${index + 1}: ${item.name} - $${item.price.toFixed(2)}`);
                const itemDiv = document.createElement('div');
                itemDiv.textContent = `Artículo ${index + 1}: $${item.price.toFixed(2)}`;
                cartDiv.appendChild(itemDiv);
            });

            const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
            totalPriceDiv.textContent = `Total: $${totalPrice.toFixed(2)}`;
        }
    }

    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', function () {
            const sound = new Audio(`images/${this.getAttribute('data-sound')}`);
            sound.play();
        });
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.removeEventListener('click', addToCartHandler); // Remove previous listener
        button.addEventListener('click', addToCartHandler);
    });

    function addToCartHandler() {
        const image = this.parentElement.querySelector('img');
        if (image) {
            addToCart(image.src.split('/').pop(), parseFloat(this.previousElementSibling.textContent.replace('Precio: $', '')));
        }
    }



    if (clearCartButton) {
        clearCartButton.addEventListener('click', function () {
            cartItems.length = 0; // Clear the cart items
            updateCartDisplay();
        });
    }

    
});
