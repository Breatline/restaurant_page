import imgPereFils from './images/perefils.jpg';
import wallpaper from './images/fancy-wallpaper.jpg';

function createHome(){
    const main = document.getElementById('main');


    const backgroundImg = document.createElement('img');
    backgroundImg.classList.add('background-img');
    backgroundImg.setAttribute('id', 'background-img');
    backgroundImg.src = wallpaper;

    const mainText = document.createElement('div');
    mainText.classList.add('mainText');

    const text = document.createElement('p');
    text.classList.add('text');
    text.innerHTML = 'Père & Fils is a culinary gem that embodies the time-honored traditions of French gastronomy. With a deep-rooted commitment to providing an authentic French dining experience, our restaurant brings to life the essence of French cuisine through the transmission of culinary artistry from one generation to the next.<br>'
    text.innerHTML += '<br> As you step into our charming establishment, you are immediately greeted by an ambiance that exudes warmth and story. Père & Fils is not merely a restaurant; it is a living testament to the culinary journey that has been passed down through generations. From the moment you enter, you are enveloped in the captivating tale of culinary excellence, crafted by the skilled hands of fathers and sons over the years.<br>'
    text.innerHTML += '<br>Our culinary concept revolves around the seamless fusion of tradition and innovation. Every dish that graces your table is a reflection of the time-tested techniques and family secrets, diligently preserved and honed over the years. It is a symphony of flavors that transcends time, transporting you to the very heart of France.<br>'
    text.innerHTML += '<br>At Père & Fils, we take immense pride in carrying forward the legacy of our ancestors, infusing each creation with the love and dedication that has been shared from father to son. The culinary expertise that has been passed down through the generations is evident in every bite, allowing you to savor the genuine taste of France.<br>'
    text.innerHTML += '<br>Join us at Père & Fils and be a part of a culinary journey that honors tradition, celebrates family, and embraces the true essence of French cuisine. Experience the cherished flavors of generations past and embark on an extraordinary gastronomic adventure that unites the old and the new in perfect harmony.<br>'

    const perefils = document.createElement('img');
    perefils.classList.add('perefils');
    perefils.setAttribute('id', 'perefils');
    perefils.src = imgPereFils;


    main.appendChild(backgroundImg);
    main.appendChild(mainText);
    mainText.appendChild(perefils);
    mainText.appendChild(text);

    return home;
}


function loadHome(){
    const main = document.getElementById('main');

    console.log('thomas from home');

    main.appendChild(createHome());
}

export default loadHome;