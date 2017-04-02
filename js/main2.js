var contador = 0;

function crearLista(){
  //guarda el valor del input nombreNuevaLista en una variable nombre
  var nombre = document.getElementById("nombreNuevaLista").value;
  // se crea un elemento section para guardar ahi todos lo elementos que integraran la lista que se creara
  var contenedorLista = document.createElement("section");
  contenedorLista.id = "contenedor"+contador;
  // se crea un elemento ul(lista con viñetas)
  var nuevaLista = document.createElement("ul");
  // seagrega un nodo texto a al elemento ul que se creo 
  nuevaLista.appendChild(document.createTextNode(nombre.toUpperCase()));
  nuevaLista.id = "lista" + contador;
  // se crea un input tipo texto para agregar los pendientes a la lista
  var textoPendientes = document.createElement("input");
  textoPendientes.id = "textoPendiente"+contador;
  // se crea elemento input tipo boton  para acceder a la funcion agregarPendientes y se le asignan atributos al boton
  var botonPendientes = document.createElement("input");
  botonPendientes.type = "button";
  botonPendientes.value = "Crear Pendiente";
  botonPendientes.id = contador;
  botonPendientes.setAttribute("onclick","agregarPendiente(event)");
  // se crea un elemento input tipo boton para acceder a la funcion borrarLista
  var botonBorrarLista= document.createElement("input")
  botonBorrarLista.type = "button";
  botonBorrarLista.value = "Borrar Lista";
  botonBorrarLista.id= "botonBorrarLi"+ contador;
  botonBorrarLista.setAttribute("onclick","borrarLista(event)");
  // se crea un elemnto hr para ir separando las listas que se crean
  var separador= document.createElement("hr");
  //se agregan los elementos creados a la seccion con id agregarListas
  contenedorLista.appendChild(nuevaLista);
  contenedorLista.appendChild(textoPendientes);
  contenedorLista.appendChild(botonPendientes);
  contenedorLista.appendChild(botonBorrarLista);
  contenedorLista.appendChild(separador);
  document.getElementById("agregarListas").appendChild(contenedorLista);
//borrar el contenido ingresa por el usuario del input con id nombreNuevaLista
  document.getElementById("nombreNuevaLista").value="";

  contador++;
}

function agregarPendiente(event){
  var id= event.target.id;
  //se guarda en una variable la ubicacion de un elemento input texto con id textoPendiente#
  var nombrePendiente= document.getElementById("textoPendiente"+id);
  // se crea el un elemeto li para ir agregando los pendientes
  var nuevoPendiente= document.createElement("LI");
  nuevoPendiente.appendChild(document.createTextNode(nombrePendiente.value));
  // se crea un boton que al dar click se elimine el pendiente
  var botonEliminarPendiente = document.createElement("input");
  botonEliminarPendiente.type = "button";
  botonEliminarPendiente.value = "x";
  botonEliminarPendiente.setAttribute("onclick","eliminarPendiente(event)")
  // se agrega al elemento con id lista (elemento ul) sus nodos hijos que son un imput texto con el nombre del pendiente y un boton
  document.getElementById("lista"+id).appendChild(nuevoPendiente);
  document.getElementById("lista"+id).appendChild(botonEliminarPendiente);
  //borra el contenido que ingreso el usuario de un input texto
  nombrePendiente.value= "";
 
}

function borrarLista(event){
  // se guarda el nodo padre del boton al que se le dio click
  var lista= event.target.parentNode;
  // se elimina el nodo padre con sus hijos
  document.getElementById("agregarListas").removeChild(lista);
}

function eliminarPendiente(event){
  //se guarda el nodo padrea del boton al que se le dio click
  var lista = event.target.parentNode; 
  //se elimina el elemento anterior(hermano) del boton que se le dio click (se elima el input texto con el nombre del pendiente)
  lista.removeChild(event.target.previousSibling);
  // se elimina el el elemnto al que se le dio click
  lista.removeChild(event.target);
}