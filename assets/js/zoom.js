var mainImage = document.getElementsByClassName('product__main-image');
var zoomImages = document.getElementsByClassName('product__additional-image');

for(var i = 0; i < zoomImages.length; i++){
    zoomImages[i].addEventListener("mouseover", function(event) {
        var target = event.target;
        mainImage[0].src = target.src;
    });
};