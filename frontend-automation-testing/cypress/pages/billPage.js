/// <reference types="cypress" />

//Elements
const viewBill='div.block:nth-child(3) > a:nth-child(4)' //bill btn
const titleOfBills='ID:'
//Functions
function clickOnBillsPages(cy){
    cy.get(viewBill).click()
}

//function checkTitleOfBillsPage(cy){
  //  cy.get('xxx').contains().should('eq', titleOfBills)

    //Fixa contains
//}

//Exports
module.exports = {
    //checkTitleOfBillsPage,
    clickOnBillsPages
}