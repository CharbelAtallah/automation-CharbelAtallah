/// <reference types="cypress" />

//Elements
const viewBill='div.block:nth-child(3) > a:nth-child(4)' //bill btn
const titleOfBills='ID:'
const createBills='h2 > .btn' //Create bill
const selectBillValue='input' //.type('5000')
const selectBillCheckbox ='.checkbox' //.click() //Check mark a box
const selectBillSaveBtn ='.blue' //Click on save button in Bills
const selectBillMenu =':nth-child(2) > .action > img' //clicks on the ... on the side
const selectBillEdit='.menu > :nth-child(1)' //Clicks on edit in menu
const selectBillDelete='.menu > :nth-child(2)' //Delete 

//Function to click on view room
function clickOnBillsPages(cy){
    cy.get(viewBill).click()
}
//Function to create a bill
function clickOnCreateBill(cy) {
    cy.get(createBills).click() //Click on create a Bill
}

//Function to put in text in fields
function inputBillsFields(cy) {
    cy.get(selectBillValue).type('5000') //Input name
    cy.get(selectBillCheckbox).click()//Marks the checkbox
    cy.get(selectBillSaveBtn).click() //Click on save btn
}

function checkUncheckBillBox(cy) {
    cy.get(selectBillCheckbox).click() //Uncheck a box
    cy.get(selectBillCheckbox).click() //Check a box
    cy.get(selectBillSaveBtn).click() //Click on save btn
}

function menuBillEdit(cy) {
    cy.get(selectBillMenu).click() //clicks on the ... on the side menu
    cy.get(selectBillEdit).click() //Clicks edit in menu
}

function menuBillDelete(cy) {
    cy.get(selectBillMenu).click() //clicks on the ... on the side menu
    cy.get(selectBillDelete).click() //Delete
}
//function checkTitleOfBillsPage(cy){
  //  cy.get('xxx').contains().should('eq', titleOfBills)

    //Fixa contains
//}

//Exports
module.exports = {
    //checkTitleOfBillsPage,
    clickOnBillsPages,
    clickOnCreateBill,
    inputBillsFields,
    checkUncheckBillBox,
    menuBillEdit,
    menuBillDelete
}