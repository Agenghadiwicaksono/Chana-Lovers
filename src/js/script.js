//navbarfixed
window.onscroll = function (){
    const header = document.querySelector('header');
    const navbarfixed = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if (window.pageYOffset > navbarfixed) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
    }
}

//button humberger
const humberger = document.querySelector('#humberger');
const navmenu = document.querySelector('#nav-menu');
 humberger.addEventListener('click',function(){
    humberger.classList.toggle('active');
    navmenu.classList.toggle('hidden');
 });

//  klik dimana pun
window.addEventListener('click', function(a){
    if (a.target !=humberger && a.target !=navmenu) {
        humberger.classList.remove('active');
        navmenu.classList.add('hidden');
    }
});

// darkmode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click',function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// perpindah tombol
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  }else{
    darkToggle.checked = false;
  }
