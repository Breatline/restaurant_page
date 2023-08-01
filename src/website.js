import instagramSVG from './images/instagram.svg';
import twitterSVG from './images/twitter.svg';
import emailSVG from './images/email.svg';
import './style.css';
import createHome from './home';
import loadHome from './home';


function setActiveButton(button){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if(button.classList.contains('active')){
            button.classList.remove('active')
        }
    });
    button.classList.add('active');
}

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.innerText = 'Père&Fils';

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const btnHome = document.createElement('button');
    btnHome.classList.add('btn-home');
    btnHome.innerText = 'home';

    btnHome.addEventListener('click', () => {
        setActiveButton(btnHome);
        loadHome();
    })

    const btnMenu = document.createElement('button');
    btnMenu.classList.add('btn-menu');
    btnMenu.innerText = 'menu';

    btnMenu.addEventListener('click', () => {
        setActiveButton(btnMenu);
    })


    nav.appendChild(btnHome);
    nav.appendChild(btnMenu);

    return nav;
}

function createMain(){
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');

    return main;
}

function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.setAttribute('id', 'footer');

    const contact = document.createElement('div');
    contact.classList.add('contact');

    const instagramLogo = document.createElement('img');
    instagramLogo.classList.add('svgFooter');
    instagramLogo.setAttribute('id', 'instagram')
    instagramLogo.src = instagramSVG;

    const twitterLogo = document.createElement('img');
    twitterLogo.classList.add('svgFooter');
    twitterLogo.setAttribute('id', 'twitter');
    twitterLogo.src = twitterSVG;

    const emailLogo = document.createElement('img');
    emailLogo.classList.add('svgFooter');
    emailLogo.src = emailSVG;

    footer.appendChild(contact);
    contact.appendChild(instagramLogo);
    contact.appendChild(twitterLogo);
    contact.appendChild(emailLogo);

    return footer;
}

function websiteCompilator(){
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();

    return content;
}

export default websiteCompilator;