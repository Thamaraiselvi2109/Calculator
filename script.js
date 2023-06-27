var output=document.getElementById('display')
var answer=output.innerHTML
function calc(number){
    output.innerHTML= output.innerHTML+ number;
}
function calculate(){
    output.innerHTML=eval(output.innerHTML)
}
function del(){
    output.innerHTML="";
}