console.log('saa');
alert('działa');

const btn = document.querySelector(".top");
let number = 1;



btn.addEventListener('click', function () {
    const lastLI = document.createElement('li');
    lastLI.textContent = number;

    number++;

    const ul = document.querySelector('ul');
    ul.appendchild(lastLI);

})

const ul = document.querySelector('ul');
document.ul.appendchild(number)
