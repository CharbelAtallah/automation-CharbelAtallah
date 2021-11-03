/// <reference types="cypress" />

//Elements
const viewClient='.blocks > :nth-child(2) > .btn' //Client btn
const titleOfClients='#1'
const createClients='h2 > .btn' //Create a Client

const selectClientName=':nth-child(1) > input' //.type('Charbel Atallah') //Input name
const selectClientEmail=':nth-child(2) > input' //.type('chappa_atallah@hotmail.com') //Input email
const selectClientTele=':nth-child(3) > input' //.type('0737183032') //Input phone
const selectClientSaveBtn ='.blue' //Click on save button in Client

const selectClientMenu =':nth-child(3) > .action > img' //clicks on the ... on the side
const selectClientDelete='.menu > :nth-child(2)' //Deleting the room

//Elements contains
const containsDashboardsClient='Clients'
const containsCreateClient='Create Client'
const containsClientSaveBtn='Save'
const containsClientsDeleteMenu='Delete'

//Function to click on view client
function clickOnClientsPages(cy){
    cy.get(viewClient).click() //Click on view Client
    cy.contains(containsDashboardsClient)
}

//Function to create client
function clickOnCreateClients(cy) {
    cy.contains(containsCreateClient)
    cy.get(createClients).click() //Click on create a Client
}

//Function to put in text in fields
function inputClientsFields(cy) {
    cy.get(selectClientName).type('Charbel Atallah') //Input name
    cy.get(selectClientEmail).type('chappa_atallah@hotmail.com') //Input email
    cy.get(selectClientTele).type('0737183032') //Input phone
    cy.contains(containsClientSaveBtn)
    cy.get(selectClientSaveBtn).click() //Click on save btn
}

//Function to select menu and delete
function deleteClientMenu(cy) {
    cy.get(selectClientMenu).click()
    cy.contains(containsClientsDeleteMenu)
    cy.get(selectClientDelete).click()

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
    inputClientsFields,
    deleteClientMenu
}


//fixa contains