let btn = document.getElementById('btn')
btn.addEventListener("click", sortear)
    function sortear() {

      let inp = document.getElementById('input')
      let valor = inp.value;


        let result = document.getElementById('sorteio')

        result.innerHTML = Math.floor((Math.random() * valor) + 1);


    }

let inp = document.getElementById('input')

inp.addEventListener("input", viewValue)
    function viewValue() {
      let inp = document.getElementById('input')
      let valor = inp.value;


        let result = document.getElementById('inpVal')

        result.innerHTML = valor;


    }


let buttonAvante = document.getElementById('up')
  buttonAvante.addEventListener("click", aumentar)
    function  aumentar() {
      let inp = document.getElementById('input')
      let valor = inp.value;

      let number = parseInt(valor) - parseInt(100);

      inp.value = number;

      let result = document.getElementById('inpVal')

      result.innerHTML = number;


      if (number < 0) {
          result.innerHTML = 0;
      }
    }


    let buttonRetr = document.getElementById('up2')
      buttonRetr.addEventListener("click", retroceder)
        function retroceder() {
          let inp = document.getElementById('input')
          let valor = inp.value;

          let number = parseInt(valor) + parseInt(100);


          inp.value = number;

          let result = document.getElementById('inpVal')

          result.innerHTML = number;

          if (number > 1000) {
              result.innerHTML = 1000;
          }


        }