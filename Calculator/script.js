// let input = document.getElementById('inputbox');
// var buttons = document.querySelectorAll('button');
// let string="";
// let arr=Array.from(buttons);

// arr.forEach(button => {
//     button.addEventListener('click',(e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string="";
//             input.value=string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string=string.substring(0,string.length-1);
//             input.value=string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value=string;
//         }
//     })
// })

// // using chatgpt


// Get the calculator elements
// Get the calculator elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calculator button');

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      display.value += button.value;
    }

    if (button.classList.contains('operator')) {
      display.value += ` ${button.value} `;
    }

    if (button.classList.contains('clear')) {
      display.value = '';
    }

    if (button.classList.contains('equals')) {
      display.value = eval(display.value);
    }
  });
});
