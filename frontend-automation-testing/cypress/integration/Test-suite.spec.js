/// <reference types="cypress" />
//cy.wait(3000) //3000 ms
//testfall där man bara checkar olika alternativ
//Testfall med fel användarnamn eller lösenord

8. //Test suite
describe('Test suite - 1', function(){
    //Test case
    it('Test case 1 - open test hotel & login/logout', function(){
	 cy.visit('http://localhost:3000')
     /*
     cy.title() .should('include','Tester')
     cy.contains('Login')
     cy.get(':nth-child(1) > input').type('tester01')
     cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
     cy.get('.btn').click()
     cy.contains('Welcome tester01!')
     cy.get('.user > .btn').click()
     cy.contains('Login')
     */
    })
    
    it.skip('Test case 2 - check rooms' ,function(){
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click() //Click log in
        cy.contains('Rooms')
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Floor')
        cy.contains('Back')
        cy.get(':nth-child(3) > .btn').click()
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.contains('#1')
        cy.get(':nth-child(3) > .btn').click()
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('ID:')
        cy.get(':nth-child(3) > .btn').click()
        cy.get(':nth-child(4) > .btn').click()
        cy.contains('Reservations')
        cy.get(':nth-child(3) > .btn').click()
        cy.get('.user > .btn').click()
    })

    it.skip('Test case 3 - create a room' ,function(){
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click() //Click log in
        cy.wait(3000) //Delaying with 3 ms, for the site to upload
        cy.contains('Rooms')
        cy.get(':nth-child(1) > .btn').click() //click view room
        cy.wait(2000)
        cy.get('h2 > .btn').click() //click to create a room
        cy.get(':nth-child(1) > select').select('Single') //Select category
        cy.get(':nth-child(2) > input').type('55')//Input phone number
        cy.get(':nth-child(3) > input').type('2') //Input floor number
        cy.get('.checkbox').click() //Marks the checkbox by clicking on it
        cy.get(':nth-child(5) > input').type('1000') //Input price
        cy.get(':nth-child(6) > select').select('ensuite') //Mark and select only one
        cy.get('.blue').click() //Click save
        cy.wait(2000)
        cy.contains('Create Room')
        cy.get('.user > .btn').click() //log out
    })

    it.skip('Test case 4 - Delete a room' ,function(){
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click() //Click log in
        cy.wait(3000) 
        cy.contains('Tester Hotel Overview') //Check if its the right page
        cy.get(':nth-child(1) > .btn').click() //Click at the "view" room
        cy.get(':nth-child(3) > .action > img').click() //clicks on the ... on the side
        cy.get('.menu > :nth-child(2)').click() //Deleting the room
        cy.get('.user > .btn').click() //log out
        cy.contains('Login')

    })
    it.skip('Test case 5 - Create a client' ,function(){
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click() //Click log in
        cy.wait(3000)
        cy.get('.blocks > :nth-child(2) > .btn').click() //Click on view button
        cy.contains('Clients')
        cy.get('h2 > .btn').click() //Create a client
        cy.contains('New Client')
        cy.get(':nth-child(1) > input').type('Charbel Atallah') //Input name
        cy.get(':nth-child(2) > input').type('chappa_atallah@hotmail.com') //Input email
        cy.get(':nth-child(3) > input').type('0737183032') //Input phone
        cy.get('.blue').click() //Save
        cy.get(':nth-child(3) > .btn').click() //Back
        cy.contains('Clients') //Check if it goes back to Client list
        cy.get('.user > .btn').click() //log out

    })
    it.skip('Test case 6 - Delete Client' ,function(){
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click() //Click log in
        cy.wait(3000)
        cy.contains('Client') //Check if its on correct side
        cy.get('.blocks > :nth-child(2) > .btn').click() //Click view button
        cy.contains('Clients')
        cy.get(':nth-child(3) > .action > img').click() //clicks on the ... on the side
        cy.get('.menu > :nth-child(2)').click() //Delete the Client that was created in TC5
        cy.get('.user > .btn').click() // Log out
    })
    it('Test case 7 - Create a bill' ,function(){
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click() //Click log in
        cy.wait(3000)
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(3) > .btn').click() //Click view
        cy.wait(1500)
        cy.contains('Bills') //Check ur on the right page
        cy.get('h2 > .btn').click() //Create bill
        cy.contains('New Bill')
        cy.get('input').type('5000')
        cy.get('.checkbox').click() //Check mark a box
        cy.get('.blue').click() //Saves
        cy.get('.user > .btn').click() // Log out
    })
    it('Test case 8 - Edit and uncheck and check the paid button on a bill' ,function(){
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click() //Click log in
        cy.wait(3000)
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(3) > .btn').click() //Click view
        cy.wait(1500)
        cy.contains('Bills') //Check ur on the right page
        cy.get(':nth-child(2) > .action').click() ////clicks on the ... on the side
        cy.get('.menu > :nth-child(1)').click() //Click on edit
        cy.wait(2000)
        cy.get('.checkbox').click() //Uncheck the box
        cy.wait(3000)
        cy.get('.checkbox').click() //Check the box again
        cy.wait(2000)
        cy.get('.blue').click() //Saves
        cy.get('.user > .btn').click() // Log out
    })
    it('Test case 9 - Delete a bill' ,function(){
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click() //Click log in
        cy.wait(2000)
        cy.contains('Bills') //Check ur on the right page
        cy.get(':nth-child(3) > .btn').click() //Click view
        cy.wait(1500)
        cy.get(':nth-child(2) > .action').click() ////clicks on the ... on the side
        cy.wait(1000)
        cy.get('.menu > :nth-child(2)').click() //Delete
        cy.wait(1000)
        cy.get('h1 > .router-link-active').click() //Click back to homepage
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
    })
})



