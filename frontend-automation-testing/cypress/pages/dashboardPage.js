/// <reference types="cypress" />

//Element
const titleOfDash= 'Testers Hotel'
//const titleOfRooms='Floor'
const titleOfBackBtn='Back'
//const titleOfClients='#1'
//const titleOfBills='ID:'
//const titleOfReservations='Reservations'

//const viewRooms=':nth-child(1) > .btn' //Rooms btn
const viewDashboard=':nth-child(3) > .btn' //Back btn
//const viewClient='.blocks > :nth-child(2) > .btn' //Client btn
//const viewBill=':nth-child(3) > .btn' //bill btn
//const viewReservations=':nth-child(4) > .btn' //Reservation btn

//Actions
function checkTitleOfdashboardPage(cy){
    cy.title().should('eq', titleOfDash)
}

function clickOnDashboardPages(cy){
    cy.get(viewDashboard).click()
    //cy.get(viewClient).click()
   // cy.get(viewBill).click()
   // cy.get(viewReservations).click()
}
//Exports
module.exports = {
    checkTitleOfdashboardPage,
    clickOnDashboardPages
}