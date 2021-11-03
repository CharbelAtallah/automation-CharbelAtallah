/// <reference types="cypress" />

//Element
const titleOfDash= 'Testers Hotel'
const titleOfBackBtn='Back'
const viewDashboard=':nth-child(3) > .btn' //Back btn


//Actions
function checkTitleOfdashboardPage(cy){
    cy.title().should('eq', titleOfDash)
}

function clickOnDashboardPages(cy){
    cy.get(viewDashboard).click()
}
//Exports
module.exports = {
    checkTitleOfdashboardPage,
    clickOnDashboardPages
}