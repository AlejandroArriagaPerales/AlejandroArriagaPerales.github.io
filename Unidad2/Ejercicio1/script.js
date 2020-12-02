function calculaMC(){
    let vPeso = document.getElementById('peso').value;
    let vAltura = document.getElementById('altura').value;
    let resultado = vPeso/(vAltura*vAltura);
    var multiplier = 100;
    var resultado2 = Math.round(resultado * multiplier) / multiplier;
    let vIMC = document.getElementById('imc');
    
    vIMC.innerText = resultado2;
    let vCategoria = document.getElementById('cate');
    if(resultado2<18.5){
        vCategoria.innerText = "Estas en bajo peso";
    }
    if(resultado2>=18.5&&resultado<25){
        vCategoria.innerText = "Estas en peso normal";
    }
    if(resultado2>=25&&resultado<30){
        vCategoria.innerText = "Estas en sobrepeso";
    }
    if(resultado2>=30&&resultado<35){
        vCategoria.innerText = "Estas en peso alto pero no tanto";
    }
    if(resultado2>=35){
        vCategoria.innerText = "Estas en obesidad morbida";
    }
}




    /*vIMC.setAttribute("class","titulo-principal");
    vIMC.classList.add()
    vIMC.className=*/

