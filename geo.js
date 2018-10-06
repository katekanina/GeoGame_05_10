// var Greeting = document.querySelector('#greeting');

var StartGame = document.querySelector('#greeting input#StartClick');
console.log(StartGame);
var prev = document.querySelector('#gallery .buttons .prev');//кнопка вперед
var next = document.querySelector('#gallery .buttons .next');//кнопка назад
var start = document.querySelector('#gallery .start');//кнопка старт игры

var images = document.querySelectorAll('#gallery .drawings img');//массив фото флагов

var Gallery = document.querySelector('#gallery');// тут все кнопки и фото

var Drawings = document.querySelector('div.drawings');//фото флага Algeria, остальные под ним и не видны

var countreisR = ['Алжир', 'Антигуа', 'Армения', 'Австралия','Австрия',
    'Багамы', 'Бахрейн', 'Бангладеш', 'Бельгия', 'Бенин', 'Болгария',
    'Канада',  'Острова Кука', 'Габон', 'Израиль', 'Япония', 'Микронезия',
    'Монако',  'Ньюие', 'Сао-Том-и-Принсипе', 'Южный Судан', 'Великобритания'];

var countreisEn = ['Algeria', 'Antigua', 'Armenia', 'Australia','Austria',
    'Bahamas', 'Bahrain', 'Bangladesh', 'Belgium', 'Benin', 'Bulgaria',
    'Canada',  'Cook Islands', 'Gabon', 'Israel', 'Japan', 'Micronesia',
    'Monaco',  'Niue', 'Sao Tome and Principe', 'South Sudan', 'United Kingdom'];

var min = 0; //величины для функции случайного выбора числа SelectCountry()
var max = countreisEn.length-1;

//ф-ция угадывания страны по ее флагу SelectCountry
// Drawings.onclick = Find_the_flag;
function Find_the_flag(ID){
    return function (event) {
        var Country = event.target.id; // номер страны в массиве стран
        var divCountry = document.createElement('div');
        divCountry.innerHTML = countreisEn[Country];
        main.appendChild(divCountry);

        if(ID == Country) {
            Gallery.innerHTML = 'You\'re right\n';
            Gallery.style.backgroundColor = 'yellow';
            Gallery.style.fontSize = '30px';
            console.log('win');
            StartGame.value = 'можете зарегистрироваться и ваши баллы будут накапливаться';
        } else {
            Gallery.style.opacity = 0;
            console.log('no');
            StartGame.value = 'попробуйте еще раз';
        }
    }
}


start.onclick = SelectCountry;// выбираем страну, нажимая на кнопку "выбери страну"

function SelectCountry() {// выбираем страну, нажимая на кнопку "выбери страну"
    var n = Math.floor(Math.random() * (max - min + 1)) + min;//случайное число

    start.value = countreisEn[n]; //название страны и ее номер в массиве

    CountryName(n);// вытаскивает название страны по фото флага

    var i = 0;

    next.onclick = Next;//просмотр фото вперед

    function Next() {
        images[i].className = '';
        i++;
        if (i >= images.length) {
            i = 0;
        }
        images[i].className = 'showed';
    }

    prev.onclick = Prev;//просмотр фото назад

    function Prev() {
        images[i].className = '';
        i--;
        if (i < 0) {
            i = images.length - 1;
        }
        images[i].className = 'showed';//показывает выбранную кликом фотку, остальные невидимые
    }

}

function CountryName(k) { // эта ф-ция вызывается из кликов по кнопкам prev/next
    var imgSrc1 = document.querySelector('.showed');// элемент img с классом showed
    var ID = imgSrc1.id; // id этого элемента, он равен номеру страны флаг которой на фото
    Drawings.onclick = Find_the_flag(k);
}

function P() {
    Gallery.style.opacity = 1;//появляется окно с флагами
}


