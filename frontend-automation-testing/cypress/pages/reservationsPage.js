/// <reference types="cypress" />

//Elements
const viewReservations=':nth-child(4) > .btn' //Reservation btn
const titleOfReservations='Reservations'
const createReservations ='h2 > .btn' //Create reservation
const selectReservationStart=':nth-child(1) > input' //Input start date
const selectReservationEnd=':nth-child(2) > input' //Input end date
const selectReservationClient=':nth-child(3) > select' //Select client
const selectReservationRoom=':nth-child(4) > select' //Select Room
const selectReservationID=':nth-child(5) > select' //Select ID
const selectReservationSaveBtn='.blue' //Save
const selectReservationMenu=':nth-child(2) > .action > img' //Select menu
const selectReservationDelete='.menu > :nth-child(2)' //Delete



//Function to Click on view room
function clickOnReservationsPages(cy){
    cy.get(viewReservations).click()
}

//Function to create client
function clickOnCreateReservations(cy) {
    cy.get(createReservations).click() //Click on create a reservation
}

//Function to put in text in fields
function inputReservationsFields(cy) {
    cy.get(selectReservationStart).type('2021-12-24') //Input start date
    cy.get(selectReservationEnd).type('2021-12-26') //Input end date
    cy.get(selectReservationClient).select('Jonas Hellman (#1)') //Select client
    cy.get(selectReservationRoom).select('Floor 1, Room 101') //Select Room
    cy.get(selectReservationID).select('ID: 1') //Select ID
    cy.get(selectReservationSaveBtn).click() //Click Save
}

function menuReservationDelete(cy) {
    cy.get(selectReservationMenu).click() //Click menu
    cy.get(selectReservationDelete).click() //Click Delete
}


//function checkTitleOfReservationsPage(cy){
  //  cy.get('xxx').contains().should('eq', titleOfReservations)

    //Fixa contains
//}

//Exports
module.exports = {
    //checkTitleOfReservationsPage,
    clickOnReservationsPages,
    clickOnCreateReservations,
    inputReservationsFields,
    menuReservationDelete
}