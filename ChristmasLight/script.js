var btn = document.getElementById("btn")
    btn.addEventListener("click", onLight)
        function onLight(){ 
            var light = document.getElementById("lighJS")
            var light2 = document.getElementById("light2JS")
            var light3 = document.getElementById("light3JS")
            var light4 = document.getElementById("light4JS")
            var light5 = document.getElementById("light5JS")
            var light6 = document.getElementById("light6JS")
            var light7 = document.getElementById("light7JS")
            var light8 = document.getElementById("light8JS")

            light.classList.toggle("lightAnim")
            light2.classList.toggle("lightAnim2")
            light3.classList.toggle("lightAnim3")
            light4.classList.toggle("lightAnim4")
            light5.classList.toggle("lightAnim5")
            light6.classList.toggle("lightAnim6")
            light7.classList.toggle("lightAnim7")
            light8.classList.toggle("lightAnim8")
        }