
class Busqueda {
    constructor(berrioTerreno, precioTerreno) {
      this.berrioTerreno = berrioTerreno;
      this.precioTerreno = precioTerreno;
    }
}

const terrenos = [];


/*****************************/
//Si el LocalStorage tiene datos, los agrego al Array de terrenos.
if (localStorage.getItem('terrenos')) {
  let terreno = JSON.parse(localStorage.getItem('terrenos'));
  for (let i = 0; i < terreno.length; i++) {
    terrenos.push(terreno[i]);
  }
}

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  agregarTerreno();
});


function agregarTerreno() {
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const nuevaBusqueda = new Busqueda(descripcion, precio);
    terrenos.push(nuevaBusqueda);
    //Agrego al LocalStorage:
    localStorage.setItem('terrenos', JSON.stringify(terrenos));
    formulario.reset();
}



const contenedorResultados = document.getElementById('contenedorResultados');
const verResultados = document.getElementById('verResultados');

verResultados.addEventListener('click', () => {
  mostrarResultados();
});

function mostrarResultados() {
    contenedorResultados.innerHTML = '';
    terrenos.forEach((terreno) => {
      const div = document.createElement('div');
      div.innerHTML = `
                        <div>
                            <p>Descripción del terreno: ${terreno.berrioTerreno}</p>
                            <p>Precio del terreno en dólares: ${terreno.precioTerreno}</p>
                        </div>
        
                        `;
      contenedorResultados.appendChild(div);
    });
}

let ingresoMaxMin = document.getElementById("ingresoMaxMin");
ingresoMaxMin.addEventListener("click", agregarMaximoYminimo);

function agregarMaximoYminimo() {
    
    const maximo = document.getElementById("presMaximo").value;
    const minimo = document.getElementById("presMinimo").value;
    let presupuesto = {
        max : maximo,
        min : minimo
    };
    let presupuestoJSON = JSON.stringify(presupuesto);
    localStorage.setItem("presupuesto", presupuestoJSON);
    formularioMaxMin.reset();
    
}

/*const seleccionados = [];
const descartados = [];
//Si el LocalStorage tiene datos, los agrego a los Arrays de seleccionados y descartados.
if(localStorage.getItem('presupuesto')) {
    let maximo = JSON.parse(localStorage.getItem('presupuesto.max'));
    let minimo = JSON.parse(localStorage.getItem('presupuesto.min'));
    
    terrenos.forEach((terreno) => {
        if (terreno.precio >= minimo && terreno.precio <= maximo) {
            seleccionados.push(terreno);
        } else {
            descartados.push(terreno);
        }
    })
}*/



/************************************************************************************/
const contenedorSeleccionados = document.getElementById('contenedorSeleccionados');
const contenedorDescartados = document.getElementById('contenedorDescartados');
const verSeleccionadosYdescartados = document.getElementById('verSeleccionadosYdescartados');

verSeleccionadosYdescartados.addEventListener('click', () => {
    mostrarSeleccionadosYdescartados();
});



function mostrarSeleccionadosYdescartados(){
    const seleccionados = [];
    const descartados = [];
    
    //Si el LocalStorage tiene datos, los agrego a los Arrays de seleccionados y descartados.
    if(localStorage.getItem('presupuesto')) {
        let maximo = JSON.parse(localStorage.getItem("presupuesto.max"));
        let minimo = JSON.parse(localStorage.getItem("presupuesto.min"));
    
        terrenos.forEach((terreno) => {
            if (terreno.precio >= minimo && terreno.precio <= maximo) {
                seleccionados.push(terreno);
            } else {
                descartados.push(terreno);
            }
        })
    }
    
    //let max = localStorage.getItem(presupuesto.max); 
    //let min = localStorage.getItem(presupuesto.min);
    //contenedorSeleccionados.innerHTML = '';
    //contenedorDescartados.innerHTML = '';
    /*terrenos.forEach((terreno) => {
        if (terreno.precio >= min && terreno.precio <= max) {
            seleccionados.push(terreno);
        } else {
            descartados.push(terreno);
        }
    })*/
    seleccionados.forEach((terreno) => {
        let parrafo1 = document.createElement("p");
        parrafo1.innerText = "Terrenos seleccionados";
        contenedorSeleccionados.appendChild(parrafo1);

        const div = document.createElement('div');
        div.innerHTML = `
                          <div>
                              <p>Descripción del terreno: ${terreno.berrioTerreno}</p>
                              <p>Precio del terreno en dólares: ${terreno.precioTerreno}</p>
                          </div>
          
                          `;
        contenedorSeleccionados.appendChild(div);
    });
    descartados.forEach((terreno) => {
        let parrafo2 = document.createElement("p");
        parrafo2.innerText = "Terrenos descartados";
        contenedorDescartados.appendChild(parrafo2);

        const div = document.createElement('div');
        div.innerHTML = `
                          <div>
                              <p>Descripción del terreno: ${terreno.berrioTerreno}</p>
                              <p>Precio del terreno en dólares: ${terreno.precioTerreno}</p>
                          </div>
          
                          `;
        contenedorDescartados.appendChild(div);
    });
}

/*function mostrarResultados() {
    contenedorSeleccionados.innerHTML = '';
    contenedorDescartados.innerHTML = '';
    terrenos.forEach((terreno) => {
      const div = document.createElement('div');
      div.innerHTML = `
                        <div>
                            <p>Descripción del terreno: ${terreno.berrioTerreno}</p>
                            <p>Precio del terreno en dólares: ${terreno.precioTerreno}</p>
                        </div>
        
                        `;
      contenedorResultados.appendChild(div);
    });
}*/

/*const verSeleccionadosYdescartados = document.getElementById('verSeleccionadosYdescartados');
const contenedorSeleccionados = document.getElementById('contenedorSeleccionados');
const contenedorDescartados = document.getElementById('contenedorDescartados');

verSeleccionadosYdescartados.addEventListener('click', () => {
    mostrarSeleccionadosYdescartados();
});


function mostrarSeleccionadosYdescartados(terrenos) {
    
    let seleccionados = [];
    let descartados = [];
    

    terrenos.forEach((terreno) => {
        if (terreno.precio >= precioMinimo && terreno.precio <= precioMaximo) {
            seleccionados.push(terreno);
        } else {
            descartados.push(terreno);
        }
    })

    
    contenedorSeleccionados.innerHTML = '';
    contenedorDescartados.innerHTML = '';
    seleccionados.forEach((terreno) => {
        const div = document.createElement('div');
        div.innerHTML = `
                          <div>
                              <p>Descripción del terreno: ${terreno.berrioTerreno}</p>
                              <p>Precio del terreno en dólares: ${terreno.precioTerreno}</p>
                          </div>
          
                          `;
        contenedorSeleccionados.appendChild(div);
    });
    descartados.forEach((terreno) => {
        const div = document.createElement('div');
        div.innerHTML = `
                          <div>
                              <p>Descripción del terreno: ${terreno.berrioTerreno}</p>
                              <p>Precio del terreno en dólares: ${terreno.precioTerreno}</p>
                          </div>
          
                          `;
        contenedorDescartados.appendChild(div);
    });

}*/

