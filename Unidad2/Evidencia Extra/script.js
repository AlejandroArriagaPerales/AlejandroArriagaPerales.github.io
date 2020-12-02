

let minutos=3;
let segundos=0;

let intento=0;

let pareja1=2;
let valor;

let boleano1 = false;
let boleano2 = false;
let boleano3 = false;
let boleano4 = false;
let boleano5 = false;
let boleano6 = false;
let boleano7 = false;
let boleano8 = false;
let boleano9 = false;
let boleano10 = false;
let boleano11 = false;
let boleano12 = false;
let boleano13 = false;
let boleano14 = false;
let boleano15 = false;
let boleano16 = false;



let contestado1 = false;
let contestado2 = false;
let contestado3 = false;
let contestado4 = false;
let contestado5 = false;
let contestado6 = false;
let contestado7 = false;
let contestado8 = false;

let opor=0;

var variable1 = setInterval(inicio, 1000);

function inicio(){
    
    if(minutos==0&&segundos==0){
        window.clearInterval(variable1);
        alert("Se acabo el tiempo");
        location.reload();
        
    }else{
        segundos=segundos-1;
        if(segundos<0){
            minutos--;
            segundos=59;
        }
        document.getElementById("tiempo").innerHTML = "Tiempo: "+minutos+":"+segundos;
    }


    if(intento==2){

    
    if(contestado1==false){
        
        if(boleano1==true){
            if(boleano2==true){
            
                contestado1=true;
            }else{
                boton1.setAttribute("style", "background-image: url(img/default.jpg);");
                boton6.setAttribute("style", "background-image: url(img/default.jpg);");
                boleano1=false;
                boleano2=false;
                opor=opor+.5;
                document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
                
                
            }
       }
       if(boleano2==true){
        if(boleano1==true){
           
            contestado1=true;
        }else{
            boton1.setAttribute("style", "background-image: url(img/default.jpg);");
            boton6.setAttribute("style", "background-image: url(img/default.jpg);");
            boleano1=false;
            boleano2=false;
            opor=opor+.5;
            document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
            
        }
        }   
        }
    



       if(contestado2==false){
        
        if(boleano3==true){
            if(boleano4==true){
               
                contestado2=true;
            }else{
                boton2.setAttribute("style", "background-image: url(img/default.jpg);");
                boton7.setAttribute("style", "background-image: url(img/default.jpg);");
                boleano3=false;
                boleano4=false;
                opor=opor+.5;
                document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
                
            }

             }
        if(boleano4==true){
            if(boleano3==true){
            
            contestado2=true;
        }else{
            boton2.setAttribute("style", "background-image: url(img/default.jpg);");
            boton7.setAttribute("style", "background-image: url(img/default.jpg);");
            boleano3=false;
            boleano4=false;
            opor=opor+.5;
            document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
            
        }
         }  

       }

       if(contestado3==false){
        
        if(boleano5==true){
            if(boleano6==true){
               
                contestado3=true;
            }else{
                boton16.setAttribute("style", "background-image: url(img/default.jpg);");
                boton11.setAttribute("style", "background-image: url(img/default.jpg);");
                boleano5=false;
                boleano6=false;
                opor=opor+.5;
                document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
            }

       }
       if(boleano6==true){
        if(boleano5==true){
          
            contestado3=true;
        }else{
            boton16.setAttribute("style", "background-image: url(img/default.jpg);");
            boton11.setAttribute("style", "background-image: url(img/default.jpg);");
            boleano5=false;
            boleano6=false;
            opor=opor+.5;
            document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
        }
        }   
          
       }


       if(contestado4==false){
        if(boleano7==true){
            if(boleano8==true){
           
                contestado4=true;
            }else{
                boton3.setAttribute("style", "background-image: url(img/default.jpg);");
                boton13.setAttribute("style", "background-image: url(img/default.jpg);");
                boleano7=false;
                boleano8=false;
                opor=opor+.5;
                document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
            }

       }
       if(boleano8==true){
        if(boleano7==true){
      
            contestado4=true;
        }else{
            boton3.setAttribute("style", "background-image: url(img/default.jpg);");
            boton13.setAttribute("style", "background-image: url(img/default.jpg);");
            boleano7=false;
            boleano8=false;
            opor=opor+.5;
            document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
        }

         }   


       }


       if(contestado5==false){
        if(boleano9==true){
            if(boleano10==true){
              
                contestado5=true;
            }else{
                boton4.setAttribute("style", "background-image: url(img/default.jpg);");
                boton12.setAttribute("style", "background-image: url(img/default.jpg);");
                boleano9=false;
                boleano10=false;
                opor=opor+.5;
                document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
            }

       }
       if(boleano10==true){
        if(boleano9==true){
        
            contestado5=true;
        }else{
            boton4.setAttribute("style", "background-image: url(img/default.jpg);");
            boton12.setAttribute("style", "background-image: url(img/default.jpg);");
            boleano9=false;
            boleano10=false;
            opor=opor+.5;
            document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
        }

        }    


       }


       if(contestado6==false){
        if(boleano11==true){
            if(boleano12==true){
               
                contestado6=true;
            }else{
                boton5.setAttribute("style", "background-image: url(img/default.jpg);");
                boton8.setAttribute("style", "background-image: url(img/default.jpg);");
                boleano11=false;
                boleano12=false;
                opor=opor+.5;
                document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
            }

       }  
       if(boleano12==true){
        if(boleano11==true){
           
            contestado6=true;
        }else{
            boton5.setAttribute("style", "background-image: url(img/default.jpg);");
            boton8.setAttribute("style", "background-image: url(img/default.jpg);");
            boleano11=false;
            boleano12=false;
            opor=opor+.5;
            document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
        }

   }  


       }

       if(contestado7==false){
        if(boleano13==true){
            if(boleano14==true){
               
                contestado7=true;
            }else{
                boton9.setAttribute("style", "background-image: url(img/default.jpg);");
                boton15.setAttribute("style", "background-image: url(img/default.jpg);");
                boleano13=false;
                boleano14=false;
                opor=opor+.5;
                document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
            }

       }
       if(boleano14==true){
        if(boleano13==true){
           
            contestado7=true;
        }else{
            boton9.setAttribute("style", "background-image: url(img/default.jpg);");
            boton15.setAttribute("style", "background-image: url(img/default.jpg);");
            boleano13=false;
            boleano14=false;
            opor=opor+.5;
            document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
        }

   }  


       }

       if(contestado8==false){
        if(boleano15==true){
            if(boleano16==true){
         
                contestado8=true;
            }else{
                boton10.setAttribute("style", "background-image: url(img/default.jpg);");
                boton14.setAttribute("style", "background-image: url(img/default.jpg);");
                boleano15=false;
                boleano16=false;
                opor=opor+.5;
                document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
            }

       }
       if(boleano16==true){
        if(boleano15==true){
            
            contestado8=true;
        }else{
            boton10.setAttribute("style", "background-image: url(img/default.jpg);");
            boton14.setAttribute("style", "background-image: url(img/default.jpg);");
            boleano15=false;
            boleano16=false;
            opor=opor+.5;
            document.getElementById("oportunidades").innerHTML = "Intentos: "+opor+"/4";
        }

   }   

       }
       intento=0;
       
    }



    if(contestado1==true&&contestado2==true&&contestado3==true&&contestado4==true&&contestado5==true&&contestado6==true&&contestado7==true&&contestado8==true){
        alert("Felicidades, Ha Ganado!");
        contestado1=false;
        contestado2=false;
        contestado3=false;
        contestado4=false;
        contestado5=false;
        contestado6=false;
        contestado7=false;
        contestado8=false;

        location.reload();
    }

    if(opor==4){
        opor=0;
        alert("Has superado los intentos. PERDISTE");
        
        location.reload();
    }

    }
    
   





function insertarimg1(){
    let boton1 = document.getElementById("boton1");
    boton1.setAttribute("style", "background-image: url(img/among1.jpg);");
    intento++;
    boleano1=true;

    
}


function insertarimg2(){
    let boton6 = document.getElementById("boton6");
    boton6.setAttribute("style", "background-image: url(img/among1.jpg);");
    intento++;
    boleano2=true;
    
}

function insertarimg3(){
    let boton2 = document.getElementById("boton2");
    boton2.setAttribute("style", "background-image: url(img/among2.jpg);");
    intento++;
    boleano3=true;
    
}

function insertarimg4(){
    let boton7 = document.getElementById("boton7");
    boton7.setAttribute("style", "background-image: url(img/among2.jpg);");
    intento++;
    boleano4=true;
    
}
function insertarimg5(){
    let boton16 = document.getElementById("boton16");
    boton16.setAttribute("style", "background-image: url(img/among3.jpg);");
    intento++;
    boleano5=true;
    
}
function insertarimg6(){
    let boton11 = document.getElementById("boton11");
    boton11.setAttribute("style", "background-image: url(img/among3.jpg);");
    intento++;
    boleano6=true;
    
}
function insertarimg7(){
    let boton3 = document.getElementById("boton3");
    boton3.setAttribute("style", "background-image: url(img/among4.jpg);");
    intento++;
    boleano7=true;
    
}
function insertarimg8(){
    let boton13 = document.getElementById("boton13");
    boton13.setAttribute("style", "background-image: url(img/among4.jpg);");
    intento++;
    boleano8=true;
    
}
function insertarimg9(){
    let boton4 = document.getElementById("boton4");
    boton4.setAttribute("style", "background-image: url(img/among5.jpg);");
    intento++;
    boleano9=true;
    
}
function insertarimg10(){
    let boton12 = document.getElementById("boton12");
    boton12.setAttribute("style", "background-image: url(img/among5.jpg);");
    intento++;
    boleano10=true;
    
}
function insertarimg11(){
    let boton5 = document.getElementById("boton5");
    boton5.setAttribute("style", "background-image: url(img/among6.jpg);");
    intento++;
    boleano11=true;
    
}
function insertarimg12(){
    let boton8 = document.getElementById("boton8");
    boton8.setAttribute("style", "background-image: url(img/among6.jpg);");
    intento++;
    boleano12=true;
    
}
function insertarimg13(){
    let boton9 = document.getElementById("boton9");
    boton9.setAttribute("style", "background-image: url(img/among7.jpg);");
    intento++;
    boleano13=true;
    
}
function insertarimg14(){
    let boton15 = document.getElementById("boton15");
    boton15.setAttribute("style", "background-image: url(img/among7.jpg);");
    intento++;
    boleano14=true;
    
}
function insertarimg15(){
    let boton10 = document.getElementById("boton10");
    boton10.setAttribute("style", "background-image: url(img/among8.jpg);");
    intento++;
    boleano15=true;
    
}
function insertarimg16(){
    let boton14 = document.getElementById("boton14");
    boton14.setAttribute("style", "background-image: url(img/among8.jpg);");
    intento++;
    boleano16=true;
    
}
