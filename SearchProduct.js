/// <reference types="Cypress" />
var strftime = require('strftime')
var locators = require('../../support/Locator.js'); //Locator strategy

describe('Search Product', function(){    
  function OpenURL()
  {
   
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env('baseUrl1')); //Accessing baseUrl1 from Cypress.json  
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })   
        cy.wait(30000)
    
  } 

  it('To Search Product', function()
  {
    cy.xpath(locators.CLOSEIFRAM_XPATH).click({force:true});
    cy.xpath(locators.GLOBAL_SEARCH_XPATH).type('Office Chair')
    cy.xpath(locators.SEARCH_BUTTON_XPATH).click({force:true});
    cy.wait(10000)
    cy.xpath(locators.SORT_XPATH).click({force:true}).xpath(locators.SORT_HIGHEST_XPATH).click({force:true})
    cy.xpath(locators.PRODUCT_FIRST_XPATH).click({force:true}); 
  })


  beforeEach(function(){
    cy.wait(5000)
    OpenURL(); 
  })  

  

 
 
})