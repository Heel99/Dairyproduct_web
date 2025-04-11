function scrollbtnleft() {
  const container = document.querySelector('.scroll-content');
  if (container) {
      container.scrollBy({ left: -260, behavior: 'smooth' });
  }
}

function scrollbtnright() {
  const container = document.querySelector('.scroll-content');
  if (container) {
      container.scrollBy({ left: 260, behavior: 'smooth' });
  }
}
function scrollbtnrightNA(){
  let container = document.querySelector('.scroll-content2');
if(container){
  container.scrollBy({left:500, behavior:'smooth'});
}
}
function scrollbtnleftNA(){
  let container = document.querySelector('.scroll-content2');
if(container){
  container.scrollBy({left:-500, behavior:'smooth'});
}
}

// $("a[href='#top']").click(function() {
//   $("html, body").animate({ scrollTop: 0 }, "slow");
//   return false;
// });

// ====== JQuery for upliftpage button===

$(function () {
  const $arrow = $(".upsidearrow").hide();

  $(window).on("scroll", () => 
    $arrow.toggle($(window).scrollTop() > $(window).height())
  );

  $("a[href='#top']").click(e => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});

// ====  carousel  =====
window.onload = function () {
    let slides = 
        document.getElementsByClassName('carousel-item');

    function addActive(slide) {
        slide.classList.add('active');
    }

    function removeActive(slide) {
        slide.classList.remove('active');
    }

    addActive(slides[0]);
    setInterval(function () {
        for (let i = 0; i < slides.length; i++) {
            if (i + 1 == slides.length) {
                addActive(slides[0]);
                setTimeout(removeActive, 350, slides[i]);
                break;
            }
            if (slides[i].classList.contains('active')) {
                setTimeout(removeActive, 350, slides[i]);
                addActive(slides[i + 1]);
                break;
            }
        }
    }, 1500);
};

// ====== addtoCart======
// let addingCart = document.getElementById('addToCart');
// addingCart.addEventListener('click', function() {
//   alert('Item added to cart successfully ,please view your cart');
// });

// ====== Custumalertbox===

// Select the alert box and related elements
let alertBox = document.getElementById("customAlertBox");
let alert_Message_container = document.getElementById("alertMessage");
let close_img = document.querySelector(".close");
let alert_Message_Line2 = document.getElementById("alertMessageLine2");
let addToCartButtons = document.querySelectorAll("#addToCart");

// Add event listeners to each "Add To Cart" button
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
      alert_Message_container.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Item added to cart';
    alert_Message_Line2.innerHTML = 'Quantity: ' + document.getElementById('quantity').value; // Get quantity from the input field

    alertBox.style.display = "block";
  });
});


close_img.addEventListener('click', function() {
  alertBox.style.display = "none";
});


 







