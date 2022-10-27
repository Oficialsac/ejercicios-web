calcular = document.querySelector('.calcular')

calcular.addEventListener('click',()=>{
    peso = parseInt(document.querySelector('.peso').value)
    altura = parseInt(document.querySelector('.altura').value)*0.01
    rs = document.querySelector('.resultado')

    imc = (peso)/(altura*altura)

    if(imc < 18.5){
        rs.innerHTML = "Tas flaquito"
    }else if(imc > 18.5 && imc < 24.9){
        rs.innerHTML = "Tas normal"
    }else if(imc > 25 && imc < 29.9){
        rs.innerHTML = "Tas gordito (Sobrepeso)"
    }else if(imc > 30 && imc < 34.9){
        rs.innerHTML = "Inscribase al gym (Obesidad 1)"
    }else if(imc > 35 && imc < 39.9){
        rs.innerHTML = "Tas un poquito pasado, inscribase al gym (Obesidad 2)"
    }else if(imc > 40 && imc < 49.9){
        rs.innerHTML = "Mano cuidado, tas muy gordo (Obesidad 2)"
    }
})