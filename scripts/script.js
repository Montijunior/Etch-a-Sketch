let sketchContainer = document.querySelector('.sketch-container');
let randomColor = document.querySelector('.random');
let clearBtn = document.querySelector('.clear');
let colors = document.querySelector('.colorValues');
let inputBtn = document.querySelector('input');
let eraseBtn = document.querySelector('.erase');

let inputTitle = document.querySelector('.inputTitle');
let title = document.querySelector('.title');
let form = document.querySelector('form');


form.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();
});

let inputValue = input.value;

//by default sketchContainer has default 16 X 16 grid items
inputBtn.addEventListener('change',gridValue);


function gridValue(){
    inputValue = input.value;
    inputTitle.innerText = `${inputValue} X ${inputValue} grid`;
    input.focus();
    // console.log(inputValue);
    for (let i = 0; i < inputValue * inputValue; i++) {
        let sketchItems = document.createElement('div');
        sketchItems.classList.add('sketch-item');
        sketchContainer.appendChild(sketchItems);
        sketchContainer.style.gridTemplateColumns = `repeat(${inputValue},1fr)`;
        sketchContainer.style.gridTemplateRows = `repeat(${inputValue},1fr)`;
    }
}

//function: generates a random color
function getRandomColor(number) {
    let random = Math.floor(Math.random() * (number) + 1);
    return random;
}

randomColor.addEventListener('click',getRainBow);

function getRainBow() {
    sketchContainer.addEventListener('click',(e)=>{
        let target = e.target;
        let backgroundClr = `rgb(${getRandomColor(255)},${getRandomColor(255)},${getRandomColor(255)})`;
        target.style.backgroundColor = backgroundClr;
    });
}

colors.addEventListener('click',(e)=>{
    let colorTarget = e.target;
    let background = e.target.getAttribute('data-color');
    // console.log(background);
    sketchContainer.addEventListener('click',(e)=>{
        let divTarget = e.target;
        divTarget.style.backgroundColor = background;
        
    });
});

//clear function
clearBtn.addEventListener('click',clearPage);
function clearPage(){
    document.body.addEventListener('load',()=>{
        console.log('document loaded');
    })
}


eraseBtn.addEventListener('click',()=>{
    sketchContainer.addEventListener('click',(e)=>{
        let target = e.target;
        target.style.backgroundColor = 'white';
    });
});







