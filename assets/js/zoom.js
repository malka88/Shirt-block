var zoomFigure = document.getElementById('zoomFigure');
var zoomImage = document.getElementById('zoomImage');

zoomFigure.addEventListener("mousemove", function(event){
    clientX = event.clientX - zoomFigure.offsetLeft;
    clientY = event.clientY - zoomFigure.offsetTop;

    zWidth = zoomFigure.offsetWidth;
    zHeight = zoomFigure.offsetHeight;

    clientX = clientX / zWidth * 100;
    clientY = clientY / zHeight * 100;

    zoomImage.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(2)';
    //zoomImage.style.transform = 'translate(-50%, -50%) scale(2)';
})

zoomFigure.addEventListener("mouseleave", function(){
    zoomImage.style.transform = 'translate(-50%, -50%) scale(1)';
})