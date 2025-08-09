const result=document.getElementById("result");
function append(input){
    result.value +=input;
}
function displayclear(){
    result.value='';
}
function outputdisplay(){
    try{
        result.value=eval(result.value);
    }
    catch(error){
        result.value='error'
    }
}