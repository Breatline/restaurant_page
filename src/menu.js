import wallpaper from './images/fancy-wallpaper.jpg';

function createMenu(){

    const menu = document.createElement('menu');
    menu.classList.add('menu');
    menu.setAttribute('id', 'menu');

    const backgroundImg = document.createElement('img');
    backgroundImg.src = wallpaper;
    backgroundImg.classList.add('background-img');
    backgroundImg.setAttribute('id', 'background-img');
    
    
    menu.appendChild(backgroundImg);

    return menu;
}

function loadMenu(){
    const main = document.getElementById('main');

    main.appendChild(createMenu());
}

export default loadMenu;