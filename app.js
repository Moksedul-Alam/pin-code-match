function getpin(){
    const randomVAlue =Math.round(Math.random()*10000) ;  
    const pin =randomVAlue + '';
    if(pin.length==4){
        return randomVAlue;
    }
    else{
        return getpin();
    }
}
function generatepin(){
 
   const pinValue = getpin();
   document.getElementById('pin-value-form').value = pinValue;
}


document.getElementById('calculate-total').addEventListener('click',function(event){
const number =event.target.innerText;
const calc = document.getElementById('get-number');
if(isNaN(number)){
   if(number=='C'){
        calc.value='';
   }
}
// console.log(number)
else{
    
    const previousCalc = calc.value;
    const newCalc = previousCalc + number;
    calc.value = newCalc;
}
})


function verifypin(){
    const calcValue = document.getElementById('get-number').value;
    const pinValue = document.getElementById('pin-value-form').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFailed = document.getElementById('notify-failed');
    if(calcValue == pinValue){
     
        notifySuccess.style.display ='block';

      notifyFailed.style.display ='none';
    }
    else{
        
        notifyFailed.style.display ='block';
        notifySuccess.style.display ='none';
    }
}



// let count = 0;
// console.log(parseInt(“count”+ 1));