function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {

  let bandera = true;
  while (bandera){
    
    	let elementoModificado = document.querySelector(".cwi__name");
        	
if(elementoModificado){
        
			elementoModificado.innerHTML = "Pvynl";
  			bandera = false;
		}
      await sleep(2);
  }
  
}

demo();