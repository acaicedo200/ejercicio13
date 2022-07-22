function mayor_menor() {
    var a1 = parseInt(document.form1.n1.value);
    var a2 = parseInt(document.form1.n2.value);
    

    if (a2 > a1) {
        document.form1.resultadom.value = a2;
        document.form1.resultadome.value = a1;
    } else if (a1 > a2) {
        document.form1.resultadom.value = a1;
        document.form1.resultadome.value = a2;
    } else if (a1 < a2) {
        document.form1.resultadom.value = a2;
        document.form1.resultadome.value = a1;

    } else if (a2 < a1) {
        document.form1.resultadome.value = a1;
        document.form1.resultadom.value = a2;

    } else if (a1 = a2) {
        alert("Estos numeros son iguales");
        
    }


}