const entrada = document.getElementById('entrada')
const celcius = document.getElementById('celcius')
const btn = document.getElementById('btn')


btn.addEventListener('click', event =>{
    event.preventDefault()

    if(entrada.value == ''){
     alert('rellene el campo!')
    }else{ 

    function celciu( f ) {
        return (f - 32) * 5/9
    }
    
    let x = celciu(entrada.value)
    celcius.textContent = `${x.toFixed()} °C`
    }
})


