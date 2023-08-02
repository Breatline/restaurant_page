import wallpaper from './images/fancy-wallpaper.jpg';
import foodsteak from './images/food-steak.svg';

function createMenu(){

    const backgroundImg = document.createElement('img');
    backgroundImg.src = wallpaper;
    backgroundImg.classList.add('background-img');
    backgroundImg.setAttribute('id', 'background-img');

    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.setAttribute('id', 'menu');

    menu.appendChild(createMenuItem(
        'firsthand',
        'this is the first dishes'
    ));
    
    menu.appendChild(createMenuItem(
        'firsthand',
        'this is the second dishes'
    ));

    menu.appendChild(createMenuItem(
        'firsthand',
        'this is the third dishes'
    ));

    menu.appendChild(createMenuItem(
        'firsthand',
        'this is the fourth dishes'
    ));

    menu.appendChild(createMenuItem(
        'firsthand',
        'this is the fifth dishes'
    ));

    menu.appendChild(createMenuItem(
        'firsthand',
        'this is the sixth dishes'
    ));

        
    menu.appendChild(backgroundImg);

    return menu;
}

function createMenuItem(name, description){
    const menuItem = document.createElement('div');
    menuItem.classList.add("menu-item");

    const foodImage = document.createElement('img');
    foodImage.src = foodsteak;
    foodImage.alt = name;

    const foodName = document.createElement('h2');
    foodName.innerText = name;

    const foodDescription = document.createElement('p');
    foodDescription.innerText = description;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function loadMenu(){
    const main = document.getElementById('main');

    main.appendChild(createMenu());
}

export default loadMenu;