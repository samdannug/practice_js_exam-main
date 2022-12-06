// task 1
window.addEventListener('load', function() {
    document.querySelector('h1').classList.add('heading')
})

// task 2
window.addEventListener('dblclick', function() {
    alert(new Date())
})

// task3
document.querySelector('#toggle').addEventListener('click', function() {
    // if (this._class === 'hidden')
    document.querySelector('#emailBox').classList.toggle('hidden')
})