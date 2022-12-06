window.addEventListener('load', function() {
    console.log("page loaded")
    this.alert(document.querySelectorAll('figure figcaption')[1].innerHTML)
})

document.querySelectorAll('.thumbnail')[1].setAttribute('tabindex', 0)

document.querySelectorAll('img').forEach(item => {
    item.addEventListener('mouseenter', function() {
        console.log('mouse entered img')
        // The background image of the display should change to the same image being hovered over.  
        document.querySelector('#display').style.backgroundImage = 'url(' + item.src + ')'
        document.querySelector('#display').innerHTML = item.alt
        item.style.visibility = 'hidden';
    })
    item.addEventListener('mouseleave', function() {
        console.log('mouse left img')
        document.querySelector('#display').style.backgroundImage = '';
        document.querySelector('#display').innerHTML = 'Hover over an image below to display the image and the alt text.';
        item.style.visibility = 'visible';
        // The background image of the display should change to the same image being hovered over.  
        // document.querySelector('#display').style.backgroundImage = 'url(' + item.src + ')'
        // document.querySelector('#display').innerHTML = item.alt
        // item.style.visibility = 'hidden';
    })
    item.addEventListener('focus', function() {
        console.log('img focused')
        // The background image of the display should change to the same image being hovered over.  
        document.querySelector('#display').style.backgroundImage = 'url(' + item.src + ')'
        document.querySelector('#display').innerHTML = item.alt
        item.style.visibility = 'hidden';
    })
    // item.addEventListener('blur', function() { 
    //     console.log('img blur')
    //     document.querySelector('#display').style.backgroundImage = '';
    //     document.querySelector('#display').innerHTML = 'Hover over an image below to display the image and the alt text.';
    // })
})

// document.querySelectorAll('img').forEach(item => {
//     item.addEventListener('blur', function() {
//         console.log('img blur')
//         document.querySelector('#display').style.backgroundImage = '';
//         document.querySelector('#display').innerHTML = 'Hover over an image below to display the image and the alt text.';
//         item.style.visibility = 'visible';
//     })
// })


// document.querySelectorAll('img:nth-child(1)').addEventListener('mouseover', function() {
//     console.log('img moused over')
// })



// for i++

// item2 = document.querySelectorAll("img")[1]
// item2.addEventListener('focusin', function() {
//     console.log('img focused')
//     // The background image of the display should change to the same image being hovered over.  
//     document.querySelector('#display').style.backgroundImage = 'url(' + item2.src + ')'
//     document.querySelector('#display').innerHTML = item2.alt
//     item2.style.visibility = 'hidden';
// })

// item2.addEventListener('focusout', function() { 
//     console.log('img blur')
//     document.querySelector('#display').style.backgroundImage = '';
//     document.querySelector('#display').innerHTML = 'Hover over an image below to display the image and the alt text.';
//     item2.style.width = "500px";
//     item2.style.display = "none"
// })