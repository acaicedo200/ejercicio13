function decifrar() {
    var a1 = parseInt(document.form1.n1.value);


if(a1>=1 & a1<=9)        
{
alert("El numero tiene 1 digito");
}
else if(a1>=10 & a1<=99)    
{
alert("El numero tiene 2 digitos");
}
else if(a1>=100 & a1<=999)   
{
    alert("El numero tiene 3 digitos");
}
else if(a1>=1000 & a1<=9999)  
{
    alert("El numero tiene 4 digitos");
}
else if(a1>=10000 & a1<=99999)   
{
    alert("El numero tiene 5 digitos");
}
else if(a1>=100000 & a1<=999999)   
{
    alert("El numero tiene 6 digitos");
}
else if(a1>=1000000)    
{
    alert("El numero tiene que ser menor que 1.000.000");
}
else if(a1<1)
{
alert("El numero es igual o menor que cero");
}
}