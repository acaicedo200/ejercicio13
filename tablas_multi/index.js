function multiplicar() {
    var a1 = parseInt(document.form1.n1.value);

    console.log(a1)

    if (a1 < 2 || a1 > 9 || isNaN(a1) == true) {
        if(a1 < 2 || a1 > 9){
            alert("Error solo numeros de 2 a 9 Ingresa de nuevo");
        
    }else{
        alert("Error Solo numeros");
    }
    } else {
        for (var i = 1; i <= 10; i++) {
            document.write(a1 + 'x' + i + '=' + a1 * i + '<br> ');
        }
        document.write('<br>')
        document.write('<a href=""><input type="button" value="Volver"></a>')
    }


}