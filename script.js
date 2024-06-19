var objetos =  Array ('Cadeira' , 'Impressora' , 'Garfo')

function Adicionar () {

   var input = document.getElementById("Input").value
   
   if (input === "") {
   alert("Informe um valor válido !")

   } else {
   
      if (objetos.indexOf(input) === -1) {
      objetos.push(input)
      console.log(objetos)
      document.getElementById("Input").value = ""

      } else {
      alert("Objeto já foi adicionado !")
      }
   }

}

function Ordenar () {
   console.log(objetos.sort())
}



