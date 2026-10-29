document.getElementById("demo").onclick=function(){
document.getElementById("result").innerHTML=Date();
}


document.getElementById("b1").onclick=function(){
    document.getElementById("myImage").src="img/lamp2.gif";
}

document.getElementById("b2").onclick=function(){
    document.getElementById("myImage").src="img/lamp1.gif";
}

function convertValue(){
var dollar=document.getElementById("dollar").value;
var result=document.getElementById("result2");

if(dollar=="")
{
    result.innerHTML="enter data";
}
else if( isNaN(dollar)){
    result.innerHTML="enter num is not text";
}else if(dollar<0){
        result.innerHTML="enter potive num";

}
else if(dollar==0)

{
    result.innerHTML="enter num rather than zero"
}
else{
result.innerHTML=dollar*60 + "    Egyption pound"
}
return false;
}