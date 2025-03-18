# institutoweb-qa-automation
Pruebas automatizadas E2E con Cypress para validar la funcionalidad y seguridad de una aplicación web. El proyecto utiliza técnicas de automatización como fixtures y comandos personalizados para simplificar la validación de múltiples casos de prueba y asegurar un flujo de trabajo eficiente.
## Tecnologías utilizadas
- ✅ [Cypress](https://www.cypress.io/) - Framework de testing
- ✅ JavaScript
- ✅ Git & GitHub
## Instalación 🔧

1️⃣ Clonar el repositorio:  
```bash
git clone https://github.com/Abigailpereyra/institutoweb-qa-automation.git

2️⃣ Instalar dependencias:
npm install

3️⃣ Ejecutar las pruebas:
npx cypress open

### Estructura del Proyecto 📂
📦 cypress
 ┣ 📂 e2e
 ┃ ┣ 📜 login-test.cy.js   # Pruebas del login
 ┃ ┣ 📜 commands.js        # Comandos
 ┃ ┣ 📜 mycommands.js      # Comandos personalizados
 ┣ 📂 fixtures
 ┃ ┣ 📜 datos_test.json    # Datos de prueba
 ┣ 📜 cypress.config.js     # Configuración de Cypress
 ┣ 📜 README.md             # Documentación del repositorio

### **Ejemplo de Prueba Automatizada** 🎯

## Ejemplo de prueba 🚀
```javascript
describe('Test Login con Cypress', () => {
  it('Debería iniciar sesión correctamente', () => {
    cy.visit('/login')
    cy.get('#usuario').type('testuser')
    cy.get('#clave').type('password123')
    cy.get('button[type="submit"]').click()
    cy.contains('Acceso correcto!').should('be.visible')
  })
})

## Contacto 📧
👩‍💻 **Abigail Pereyra**  
📧 Email: abigailnaomipereyra@gmail.com  
🔗 LinkedIn: Abigail Naomi Pereyra (www.linkedin.com/in/abigail-naomi-pereyra)  
