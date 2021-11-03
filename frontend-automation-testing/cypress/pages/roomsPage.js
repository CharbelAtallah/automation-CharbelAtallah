/// <reference types="cypress" />

//Elements
const viewRooms=':nth-child(1) > .btn' //Rooms btn
const createRooms='h2 > .btn' //Creates a room
const selectRoomCategory=':nth-child(1) > select' //Selects room category
const selectRoomNumber=':nth-child(2) > input' //Input number .type '55'
const selectRoomFloor=':nth-child(3) > input' //Input floor .type '2'
const selectRoomCheckbox='.checkbox' //Selects checkbox and marks it
const selectRoomPrice=':nth-child(5) > input' //Select price .type '1000'
const selectRoomFeatures=':nth-child(6) > select' //Selects feature
const selectRoomSaveBtn ='.blue' //Click on save button in room
const selectRoomMenu =':nth-child(3) > .action > img' //clicks on the ... on the side
const selectRoomDelete='.menu > :nth-child(2)' //Deleting the room

//Elements contains
const containsDashboardsRoom='Room'
const containsCreateRoom='New Room'
const containsRoomDeleteMenu='Delete'
const containsRoomSaveBtn='Save'

//Function to Click on view room
function clickOnRoomsPages(cy){
    cy.get(viewRooms).click()
    cy.contains(containsDashboardsRoom)
}

//Function to create rooms
function clickOnCreateRooms(cy) {
    cy.get(createRooms).click()
    cy.contains(containsCreateRoom)
}

//Function to put in text in fields
function inputRoomsFields(cy) {
    cy.get(selectRoomCategory).select('Single').click
    cy.get(selectRoomNumber).type('55')
    cy.get(selectRoomFloor).type('2')
    cy.get(selectRoomCheckbox).click()
    cy.get(selectRoomPrice).type('1000')
    cy.get(selectRoomFeatures).select('Ensuite')
    cy.contains(containsRoomSaveBtn)
    cy.get(selectRoomSaveBtn).click()
}

//Function to select menu and delete
function deleteRoomMenu(cy) {
    cy.get(selectRoomMenu).click()
    cy.contains(containsRoomDeleteMenu) //Kolla om den funkar
    cy.get(selectRoomDelete).click()
}


//Exports
module.exports = {
    clickOnRoomsPages,
    clickOnCreateRooms,
    inputRoomsFields,
    deleteRoomMenu
}