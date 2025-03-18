/// <reference types="cypress" />

describe('Test con Studio Cypress', () => {
var mydata  // variale global que guarda los datos obtenidos del archivo

  beforeEach('Conexión a Institutoweb Login', () => {
    cy.visit('/test/login.html')
    cy.fixture('./datos_test')  // conectar con el archivo
    .then(test =>{  // cuando llegan los datos
        mydata = test // lo que llegó lo paso a mydata 
    })
  })

  it('Test Login Usuario', () => {
    cy.viewport(1280, 720) // tamaño de la pantalla
    mydata.forEach((data) =>{  // leo un renglón de los 10 que contiene el json
        
          // uso el comando personalizado
          cy.write('#tuusuario',data.usuario);
          cy.write('#tuclave',data.clave);
          cy.write('#tumail',data.casilla_mail);

          cy.screenshot('antes_click');

          // click del botón ingresar con comando personalizado
          cy.clicking(':nth-child(8)');

          // ingresamos en la segunda pantalla
          // Aserción del Título
          cy.get('h3').should('have.text', 'Acceso correcto!');
          cy.get('#volver').click();
    })   
  })

})