var count = 1;
document.getElementsByClassName('product__amount')[0] = count;

function increment() {
    if(count < 10) {
        count++;
        document.getElementsByClassName('product__amount')[0].value = count;
    }
}

function decrement() {
    if(count > 1) {
        count--;
        document.getElementsByClassName('product__amount')[0].value = count;
    }
}