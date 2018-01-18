
  //Traer elementos del HTML
  
  
  var loadPage = function () {
    
  };

  var paintContactsInHTML = function(contact) {
   
    /* Crear elementos con DOM html al publicar contacto */
     
    
    //Asignando atributos y/o eventos
    

    /* Asignando valores a los elementos*/
    

    //Agregamos lo que creamos con el DOM a un elemento existente del HTML
    
  };

  var addContact = function (e) {
    e.preventDefault();
    //Las siguientes lineas toman el valor que el usuario agrega en los inputs y los guardan en variables
    

    //Con las variables separadas que obtuvimos creamos una estructura de datos unica, un objeto por cada contacto
    

    /*Agregamos el contacto a nuestra data (arreglo declarado) para poderla filtrar y eliminar posteriormente*/
    
    //La siguiente funcion se encarga de pintar los contactos en el html
    
    /* Limpiando valores de formulario*/
    
  };

  


  var validateContact = function () {
    //En esta funcion tenemos que validar que el usuario ingrese datos y no valores vacios
  };


  var filterContacts = function() {
    //Esta funcion debe de filtrar la data segun el valor que el usuario ingrese en el input de busqueda
  };


  var removeContact = function () {
    //esta funcion como primer alcance debe de poer borrar la tarjeta que se crea desde el DOM
    //como segundo alcance borrar el elemento de la data
  };




  $(document).ready(loadPage);
