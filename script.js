 let input           = document.querySelector("input")
 let buttonGenerator = document.querySelector("#button_generator")
 let buttonCopy      = document.querySelector("#button_copy")
 let h1              = document.querySelector("h1")
 let result          = document.querySelector("p")
 let box_result      = document.querySelector(".box_result")
 let div_hidden      = document.querySelector(".div_hidden")
 let span            = document.querySelector("span")


 let newPassword = ""
 function generetor(passwordSize) {

  newPassword = ""

   for (let i = 0; i < passwordSize; i++) {

     let numAleatorio = Math.ceil(Math.random() * 93 + 33)
     let caracterSorteado = String.fromCharCode(numAleatorio)
     newPassword = newPassword + caracterSorteado 
   }

   return span.innerText = newPassword
 }


 function copiarTexto() {

  let textoCopiado = newPassword;
  navigator.clipboard.writeText(textoCopiado).then(response=> buttonCopy.innerText = "Copiado ✓")

  setTimeout(() => {
    buttonCopy.innerText = "Copiar"
  }, 1200);
 }

 buttonGenerator.addEventListener("click", function () {

   div_hidden.removeAttribute("hidden")
   generetor(input.value)
 })


 buttonCopy.addEventListener("click", function () {

  copiarTexto()
})
