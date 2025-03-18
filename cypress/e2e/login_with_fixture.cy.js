/// <reference types="cypress" />

describe('Test con Studio Cypress', () => {
var mydata  // variale global que guarda los datos obtenidos del archivo

  beforeEach('Conexión a Institutoweb Login', () => {
    cy.visit('https://institutoweb.com.ar/test/login.html')
    cy.fixture('./datos_test')  // conectar con el archivo
    .then(test =>{  // cuando llegan los datos
        mydata = test // lo que llegó lo paso a mydata 
    })
  })

  it('Test Login Usuario', () => {
    
    mydata.forEach((data) =>{  // leo un renglón de los 10 que contiene el json
          /* ==== Generated with Cypress Studio ==== */
          cy.get('#tuusuario').type(data.usuario);
          cy.get('#tuclave').type(data.clave);
          cy.get('#tumail').type(data.casilla_mail);
          //cy.wait(2000)
          // click del botón ingresar
          cy.get(':nth-child(8)').click();
          // ingresamos en la segunda pantalla
          // Aserción del Título
          cy.get('h3').should('have.text', 'Acceso correcto!');
          cy.get('#volver').click();
    })   
  })

})