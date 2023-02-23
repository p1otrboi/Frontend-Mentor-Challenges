const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
let active = null;

[btn1, btn2, btn3, btn4, btn5].forEach( (btn) => {
    btn.addEventListener('click', () => {
        clearActive();
        btn.classList.add('active');
        active = parseInt(btn.innerHTML);
    })
});

function clearActive() {
    [btn1, btn2, btn3, btn4, btn5].forEach( (btn) => {
        btn.classList = '';
    })
};

// btn1.addEventListener('click', () => {
//     clearActive();
//     btn1.classList.add('active');
// });

// btn2.addEventListener('click', () => {
//     clearActive();
//     btn2.classList.add('active');
// });

// btn2.addEventListener('click', () => {
//     btn2.style.backgroundColor = 'hsl(217, 12%, 63%)';
//     btn2.style.color = 'hsl(0, 0%, 100%)';
// })

// btn3.addEventListener('click', () => {
//     btn3.style.backgroundColor = 'hsl(217, 12%, 63%)';
//     btn3.style.color = 'hsl(0, 0%, 100%)';
//     [btn1, btn2, btn4, btn5].forEach( (btn) => {
//         btn = document.getElementById(''+btn+'');
//     });
// })

// btn4.addEventListener('click', () => {
//     btn4.style.backgroundColor = 'hsl(217, 12%, 63%)';
//     btn4.style.color = 'hsl(0, 0%, 100%)';
//     [btn1, btn2, btn3, btn5].forEach( (btn) => {
//         btn = document.getElementById(''+btn+'');
//     });
// })

// btn5.addEventListener('click', () => {
//     btn5.style.backgroundColor = 'hsl(217, 12%, 63%)';
//     btn5.style.color = 'hsl(0, 0%, 100%)';
//     [btn1, btn2, btn3, btn4].forEach( (btn) => {
//         btn = document.getElementById(''+btn+'');
//     });
// })

// let btnClicked = null;

// function highlight(element) {
//     if (btnClicked != null) {
//         element.style.backgroundColor = 'hsla(0, 0%, 100%, 0.1)';
//         element.style.color = 'hsl(217, 12%, 63%)';
//     }
//     btnClicked = element;
//     btnClicked.style.backgroundColor = 'hsl(217, 12%, 63%)';
//     btnClicked.style.color = 'hsl(0, 0%, 100%)';
// }

// [btn1, btn2, btn3, btn4, btn5].forEach((btn) => {
//     btn.addEventListener('hover', (btn) => {
//         btn.target.style.backgroundColor = 'hsl(0, 0%, 100%)';
//         btn.target.style.color = 'hsl(25, 97%, 53%)';
//     })
// })