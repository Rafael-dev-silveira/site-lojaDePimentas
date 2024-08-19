
let slideIndex = 0;
showSlides();

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    let slides = document.querySelectorAll('.carousel img');
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}


let cart = [];
let cartCount = 0;

function adicionarAoCarrinho(produto, preco) {
    cart.push({ produto: produto, preco: preco });
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
}

function abrirCarrinho() {
    let cartItems = document.getElementById('cart-items');
    let cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = ''; 
    let total = 0;

    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.preco;
    });

    cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
    document.getElementById('cart-modal').style.display = 'block';
}

function fecharCarrinho() {
    document.getElementById('cart-modal').style.display = 'none';
}


window.onclick = function (event) {
    let modal = document.getElementById('cart-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}