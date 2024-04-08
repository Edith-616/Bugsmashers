<form action="/home" class="inline">
    <button class="float-left submit-button" >Home</button>
</form>

let cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
        alert('Item added to cart!');
}
window.addEventListener('scroll', function() {
    var viewCartButton = document.getElementById('viewCart');
    var headerHeight = document.querySelector('header').offsetHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > headerHeight) {
        viewCartButton.style.display = 'block';
    } else {
        viewCartButton.style.display = 'none';
    }
});