let outName = document.getElementById('response');
let outNum =document.getElementById('numInp') ;
let outPass =document.getElementById('passIs') ;
let outDate =document.getElementById('todayIs') ;



const formToSubmit = document.getElementById('form');
formToSubmit.addEventListener('submit', ShowAll);


function ShowAll(event) {
    event.preventDefault();
    outName.innerHTML = event.target.text.value;
    outNum.innerHTML = event.target.number.value;
    outPass.innerHTML = event.target.password.value;
    outDate.innerHTML = event.target.date.value;
}