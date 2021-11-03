/// <reference types="cypress" />
//fixa beforeeach login.

import * as dashboardPageFuncs from '../pages/dashboardPage'
import * as roomsPageFuncs from '../pages/roomsPage'
import * as clientPageFuncs from '../pages/clientPage'
import * as billPageFuncs from '../pages/billPage'
import * as reservationsPageFuncs from '../pages/reservationsPage'
import * as loginPageFuncs from '../pages/loggPage'

8. //Test suite
describe('Test suite - 1', function(){

    before(() => {

        cy.visit('http://localhost:3000')
  })

    beforeEach(() => {
        loginPageFuncs.performLogin(cy)
    })

    afterEach(() => {
        loginPageFuncs.perfomLogout(cy)
      })


        it('Test case 1 - Check Rooms', function () {   
            roomsPageFuncs.clickOnRoomsPages(cy) //Click on Rooms
            dashboardPageFuncs.clickOnDashboardPages(cy) //Back Btn
            clientPageFuncs.clickOnClientsPages(cy) //Click on Clients
            dashboardPageFuncs.clickOnDashboardPages(cy) //Back Btn
            billPageFuncs.clickOnBillsPages(cy) //Click on Bills
            dashboardPageFuncs.clickOnDashboardPages(cy) //Back Btn
            reservationsPageFuncs.clickOnReservationsPages(cy) //Click Reservations
            dashboardPageFuncs.clickOnDashboardPages(cy) //Back Btn
        })
   
        it('Test Case 2 - Create a Room', function () {
            cy.wait(2000)
            roomsPageFuncs.clickOnRoomsPages(cy) //Click on Rooms
            roomsPageFuncs.clickOnCreateRooms(cy)
            roomsPageFuncs.inputRoomsFields(cy)
        })     

        it('Test Case 3 - Delete a Room', function () {
            cy.wait(2000)
            roomsPageFuncs.clickOnRoomsPages(cy) //Click on Rooms
            roomsPageFuncs.deleteRoomMenu(cy) //Delete Room
        })

        it('Test Case 4 - Create a Client', function () {
            cy.wait(2000)
            clientPageFuncs.clickOnClientsPages(cy) //Click on view Clients
            clientPageFuncs.clickOnCreateClients(cy) //Click on create a new client
            clientPageFuncs.inputClientsFields(cy) //Input type in textfields & Save
            dashboardPageFuncs.clickOnDashboardPages(cy) //Back Btn
        })

        it('Test Case 5 - Delete a Client', function () {
            cy.wait(2000)
            dashboardPageFuncs.checkTitleOfdashboardPage(cy)
            clientPageFuncs.clickOnClientsPages(cy) //Click on view Clients
            clientPageFuncs.deleteClientMenu(cy) //Delete Client
        })

        it('Test Case 6 - Create a Bill', function () {
            cy.wait(2000)
            billPageFuncs.clickOnBillsPages(cy) //Click on Bills
            billPageFuncs.clickOnCreateBill(cy)
            billPageFuncs.inputBillsFields(cy) //Input textfields
        })

        it('Test Case 7 - Edit and uncheck and check the paid button on a bill', function () {
            cy.wait(2000)
            billPageFuncs.clickOnBillsPages(cy) //Click on Bills
            billPageFuncs.menuBillEdit(cy)
            billPageFuncs.checkUncheckBillBox(cy)
        })

        it('Test Case 8 - Delete a Bill', function () {
            cy.wait(2000)
            billPageFuncs.clickOnBillsPages(cy) //Click on Bills
            billPageFuncs.menuBillDelete(cy) //Delete
            dashboardPageFuncs.clickOnDashboardPages(cy) //Back Btn

        })

        it('Test Case 9 - Create and Delete reservation', function () {
            cy.wait(2000)
            reservationsPageFuncs.clickOnReservationsPages(cy)
            reservationsPageFuncs.clickOnCreateReservations(cy)
            reservationsPageFuncs.inputReservationsFields(cy)
            reservationsPageFuncs.menuReservationDelete(cy)
        })
})

  




