/// <reference types="cypress" />

//elements
const indexPageTitle = 'Tester Hotel'
const usernameInput = ':nth-child(1) > input'
const passwordInput = ':nth-child(2) > input'
const loginButton = '.btn'
const username = 'tester01'
const password = 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c'

const logoutButton='.user > .btn' //Log out

//function for login data
function performLogin(cy) {
    cy.contains(indexPageTitle)
    cy.get(usernameInput).type(username)
    cy.get(passwordInput).type(password)
    cy.get(loginButton).click()
    cy.contains(username)
}

function perfomLogout(cy) {
    cy.get(logoutButton).click()
}

//exports
module.exports ={
    performLogin,
    perfomLogout
}