/// <reference types="cypress" />

//Elements
const viewReservations=':nth-child(4) > .btn' //Reservation btn
const titleOfReservations='Reservations'
//Functions
function clickOnReservationsPages(cy){
    cy.get(viewReservations).click()
}

//function checkTitleOfReservationsPage(cy){
  //  cy.get('xxx').contains().should('eq', titleOfReservations)

    //Fixa contains
//}

//Exports
module.exports = {
    //checkTitleOfReservationsPage,
    clickOnReservationsPages
}