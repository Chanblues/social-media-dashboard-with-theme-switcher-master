const backy = document.body;
const button = document.getElementsByTagName("button");
const headOne = document.getElementsByTagName("h1");
const headTwo = document.getElementsByTagName("h2");
const squareCard = document.getElementsByClassName("square_card");
const rectCard = document.getElementsByClassName("rect_card");
const numberCount = document.getElementsByTagName("h3");
const paraOne = document.getElementsByClassName('para');

function change() {
    backy.classList.toggle('white');
    button[0].classList.toggle('switch');
    headOne[0].classList.toggle('light_head');
    headTwo[0].classList.toggle('headingtwo');

    for (let i = 0; n = rectCard.length, i < n; i++) {
        rectCard[i].classList.toggle('bg'); 
        rectCard[i].classList.toggle('hovereffect');
    }

    for (let i = 0; n = squareCard.length, i < n; i++) {
        squareCard[i].classList.toggle('bg');  
        squareCard[i].classList.toggle('hovereffect');
    }

    for (let i = 0; i < numberCount.length; i++) {
        numberCount[i].classList.toggle('light_head');
    }

    for (let i = 0; i < paraOne.length; i++) {
        paraOne[i].classList.toggle('headingtwo');   
    }
}



