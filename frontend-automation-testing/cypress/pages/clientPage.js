/// <reference types="cypress" />

//Elements
const viewClient='.blocks > :nth-child(2) > .btn' //Client btn
const titleOfClients='#1'
const createClients='h2 > .btn' //Create a Client

const selectClientName=':nth-child(1) > input' //.type('Charbel Atallah') //Input name
const selectClientEmail=':nth-child(2) > input' //.type('chappa_atallah@hotmail.com') //Input email
const selectClientTele=':nth-child(3) > input' //.type('0737183032') //Input phone
const selectClientSaveBtn ='.blue' //Click on save button in Client

//Functions
function clickOnClientsPages(cy){
    cy.get(viewClient).click() //Click on view Client
}

function clickOnCreateClients(cy) {
    cy.get(createClients).click() //Click on create a Client
}

function inputClientsFields(cy) {
    cy.get(selectClientName).type('Charbel Atallah') //Input name
    cy.get(selectClientEmail).type('chappa_atallah@hotmail.com') //Input email
    cy.get(selectClientTele).type('0737183032') //Input phone
    cy.get(selectClientSaveBtn).click() //Click on save btn
}

//function checkTitleOfRoomsPage(cy){
  //  cy.get('Floor').contains().should('eq', titleOfRooms)

    //Fixa contains
//}

//Exports
module.exports = {
    //checkTitleOfRoomsPage,
    clickOnClientsPages,
    clickOnCreateClients,
    inputClientsFields
}


//fixa contains
//importera allt i test suite