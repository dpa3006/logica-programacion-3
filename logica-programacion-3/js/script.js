
function calcularFactorial(valNum) {
    valNum = parseInt(valNum);
    document.getElementById("outputFactorial").innerHTML = valNum;
    if (valNum===0){
        document.getElementById("outputFactorial").innerHTML =  1;
    } else if(valNum<0){
        document.getElementById("outputFactorial").innerHTML =  "El número es negativo. No puede calcularse el factorial."
    }
    else{
        for(i=(valNum-1); i>0; i--){
            document.getElementById("outputFactorial").innerHTML = (valNum *= i);
        }
    }
   
  }
  