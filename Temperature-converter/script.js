let input=document.getElementById("input");
let Celsius =document.getElementById("Celsius");
let Fahrenheit =document.getElementById("Fahrenheit");
let para =document.getElementById("para");
function button(){
    if(Celsius.checked){
        let temp =input.value;
        temp=Number(temp)
        temp=temp * 9/5 +32
        para.textContent=temp +"F"

    }
    else if(Fahrenheit.checked){
        let temp =input.value;
        temp=Number(temp)
        temp=(temp-32) * 5/9 
        para.textContent=temp +"F"

    }
    else{
        para.textContent='select unit'
    }
}