document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-mobile-menu');
    const closeBtn = document.getElementById('close-mobile-menu');
    const menu = document.querySelector('.mobile-menu');
    const menuItems = document.querySelectorAll('.mob-nav-list-link');

    function closeMenu() {
        menu.style.transform = 'translateY(-150%)';
    }

    openBtn.addEventListener('click', function() {
        menu.style.transform = 'translateY(0)';
    });

    closeBtn.addEventListener('click', function() {
        closeMenu();
    });

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            closeMenu();
        });
    });
});

//плавний скрол по сторінці
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        if (event.target.matches('a[href^="#"]')) {
            event.preventDefault();
            const id = event.target.getAttribute('href');
            const targetElement = document.querySelector(id);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});


var cards = document.querySelectorAll('.taste-item');
[...cards].forEach(card => {
  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
  });
});

//slider
$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop:true
    });

    $('.main-menu > ul:nth-of-type(2)').hide();
    $('.toggler').click(function() {
$('.main-menu > ul:nth-of-type(2)').toggle();
$('.drop').css({'display': 'block', 'position': 'relative'})
    });
});