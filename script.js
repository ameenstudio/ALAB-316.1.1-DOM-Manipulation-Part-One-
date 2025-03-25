
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];
let nav=document.getElementById('top-menu');

for (let i = 0; i < menuLinks.length; i++) {

    let navMenu=document.createElement('div')
    navMenu.textContent= menuLinks[i].text
    navMenu.classList.add('navMenu')
    nav.appendChild(navMenu)

}




// console.log(menuLinks);
// let nav = menuLinks[i]
nav = document.getElementById('top-menu');
let navMenu = document.createElement('nav')





let mainEl = document.querySelector('main');//Select and cache the <main> element in a variable named mainEl.
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'
mainEl.classList.add('flex-ctr');
let topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.style.flexAround







// console.log(mainEl)