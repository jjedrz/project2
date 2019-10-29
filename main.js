console.log('saa');
alert('działa');

const btn = document.querySelector(".top");
let number = 1;




btn.addEventListener('click', function () {
    const lastLI = document.createElement('li');
    lastLI.textContent = number;
    const ul = document.querySelector('ul');

    ul.appendChild(lastLI);
    number += 2;

    if ((number - 2) % 3 == 0) {
        lastLI.style.fontSize = "50px";
    }


})

//const ul = document.querySelector('ul');
//document.body.appendchild(number);

//const divElement = document.createElement('div');
//divElement.textContent = "Ostatni DIV";
//divElement.style.backgroundColor = "red";
//document.body.appendChild(divElement);

