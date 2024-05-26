# Pruebas automatizadas

## Equipo 28

| Nombre | Correo electrónico |
| --- | ---|
| Nelson Leonel Fonseca | n.fonsecao@uniandes.edu.co |

## Entorno:
- Node v18.12.1
- Cypress 13.8.1
- Ghost 5.82.11 desplegado en [https://ghost-rpq7.onrender.com/](https://ghost-y5kp.onrender.com/ghost/#/dashboard)

## Instalación

- Clonar el repositorio
```bash
git clone https://github.com/leonelfonsec/pruebas_automatizadas.git
```
```bash
cd .\pruebas_automatizadas
```

- Instalar dependencias
```bash
npm install
```

## Ejecución

### Tests de Cypress:
### pruebas para pc en diferentes navegadores
```bash
npx cypress run --headed --browser chrome --spec "cypress/e2e/pruebas_pc.cy.js"
```
```bash
npx cypress run --headed --browser electron --spec "cypress/e2e/pruebas_pc.cy.js"
```
```bash
npx cypress run --headed --browser edge --spec "cypress/e2e/pruebas_pc.cy.js"
```
### pruebas para smartphone en diferentes navegadores
```bash
npx cypress run --headed --browser chrome --spec "cypress/e2e/pruebas_smartphone.cy.js"
```
```bash
npx cypress run --headed --browser electron --spec "cypress/e2e/pruebas_smartphone.cy.js"
```
```bash
npx cypress run --headed --browser edge --spec "cypress/e2e/pruebas_smartphone.cy.js"
```
### pruebas de accesibilidad
```bash
npx cypress run --headed --browser chrome --spec "cypress/e2e/pruebas_accesibilidad.cy.js"
```
