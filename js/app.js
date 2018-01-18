  var contacts = [];
  //Traer elementos del HTML
  var $nameInput = $('#name-input');
  var $phoneInput = $('#phone-input');
  

  function loadPage() {
    $('.modal').modal();
    $nameInput.keyup(validateContact);
    $phoneInput.keyup(validateContact);
    $('#form').submit(addContact);
    $('#searcher').keyup(filterContacts);
  }

  function validateContact() {
    //En esta funcion tenemos que validar que el usuario ingrese datos y no valores vacios
    if ($(this).val().trim().length > 0) {
      $('#add-contact').removeAttr('disabled');
    } else {
      $('#add-contact').attr('disabled', true);
    }
  }
 
  function addContact(e) {
    e.preventDefault();
    //Las siguientes lineas toman el valor que el usuario agrega en los inputs y los guardan en variables
    var name = $nameInput.val();
    var phone = $phoneInput.val();

    //Con las variables separadas que obtuvimos creamos una estructura de datos unica, un objeto por cada contacto
    var contact = {
      'name': name,
      'phone': phone
    };


    /*Agregamos el contacto a nuestra data (arreglo declarado) para poderla filtrar y eliminar posteriormente*/
    contacts.push(contact);

    //La siguiente funcion se encarga de pintar los contactos en el html
    paintContactsInHTML(contact);


    /* Limpiando valores de formulario*/
    $nameInput.val(' ');
    $phoneInput.val(' ');
    $('.modal').modal('close');
  }


  function paintContactsInHTML(contact) {
    
    /* Crear elementos con DOM html al publicar contacto */
     var $newContact = $('<article />', { 'class': 'card-panel hoverable'});
     var $containerContactName = $('<h4 />');
     var $deleteContactButton = $('<button type="button" />');
     var $removeIcone = $('<i />', {'class': 'material-icons'});
     var $containerContactPhone = $('<p />');
    
    //Asignando atributos y/o eventos
    $deleteContactButton.addClass('btn right');
    $removeIcone.text('delete');
    $deleteContactButton.click(removeContact);

    /* Asignando valores a los elementos*/
    $deleteContactButton.append($removeIcone);
    $containerContactName.append(contact.name);
    $containerContactPhone.append(contact.phone);

    //Agregamos lo que creamos con el DOM a un elemento existente del HTML
    $newContact.append($containerContactName);
    $newContact.append($deleteContactButton);
    $newContact.append($containerContactPhone);

    $('#publish-contacts').prepend($newContact);
  }
  

  function filterContacts() {
    //Esta funcion debe de filtrar la data segun el valor que el usuario ingrese en el input de busqueda
    var searchContact = $("#searcher").val().toLowerCase();

    if ($("#searcher").val().trim().length > 0) {
      var filtederedContacts = contacts.filter(function(contact) {
        return contact.name.toLowerCase().indexOf(searchContact) > 0;
      });      
      $("#publish-contacts").empty();
      filtederedContacts.forEach(function(contact) {
        paintContactsInHTML(contact);        
      });
    } else {
      $("#publish-contacts").empty();
      contacts.forEach(function(contact){
        paintContactsInHTML(contact);
      });      
    }
    
  }

  function removeContact() {
    //esta funcion como primer alcance debe de poer borrar la tarjeta que se crea desde el DOM
    //como segundo alcance borrar el elemento de la data
    console.log('ENtrando funcion remover');
  }

  


  




  $(document).ready(loadPage);
