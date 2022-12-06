window.addEventListener('load', function() {
    console.log(document.querySelector('#billing').innerHTML)
})

document.querySelector("input[name='useBilling']").addEventListener('input', function() {
    console.log('input changed')
    let home = document.querySelector('#home')
    let billing = document.querySelector('#billing')
    if (home.innerHTML == billing.innerHTML) {
        home.innerHTML = "";
        home.disabled = false;
    }
    else {
        home.innerHTML = billing.innerHTML;
        home.disabled = true;
    }
})