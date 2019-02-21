import { SearchFor, SelectFirstSuggestionAndProduct, SelectSizeAndAddToBag } from '../../../cypress/integration/tutorial/POM/myFirstPage'

const locale = ['/en-gb','/en-it']

describe('My First Test', function() {
    
    // locale.forEach(element => {
        it ('Search for "Burberry" keyword, select 1st suggestion, select 1st product, select a size and add to basket', function() {
            cy.visit('/');
            SearchFor('Burberry');
            SelectFirstSuggestionAndProduct();
            SelectSizeAndAddToBag();
                      
        })   
    //);
})

    /*

    it('Footer - Click on "About Us"', function() {
        cy.get('[data-target="About Us"]').click();
        expect(true).to.equal(true)
    })


    
    it('Footer - Click on "About Us" - check target URL', function(){
        cy.get('[data-target="About Us"]').should('have.text', 'About Us');
        
        cy.get('[data-target="About Us"]').click();
        cy.url().should('include', '/about-us')
        

    })

    

    it ('Search for "Nike" keyword, select "Nike Running" and check landing page', function() {
        cy.get('.SearchPanel1__wrapper').click();
        cy.get('.SearchOverlay1__input').type('Nike');
        cy.get('[data-designer-label="Nike Running"]').click();
        cy.url().should('includes', '/nike-running');
    })
    

    it ('Search for "Nike" keyword, select 1st suggestion, select 1st product, select a size and add to basket', function() {
        cy.get('.SearchPanel1__wrapper').click();
        cy.get('.SearchOverlay1__input').type('Nike');
        cy.get('div.SearchResults1 > ul:nth-child(1) li:nth-child(2) a').click();
        cy.get('div.ProductListingPage32__layoutGrid div a:nth-child(1)').click();
        cy.get('div.CombinedSelect9__customizedSelect').click();
        cy.get('div.CombinedSelect9__customizedSelect > ul:nth-child(2) li:nth-child(1)').click();
        cy.get('div.CTAButtons43 > div:nth-child(1)').click();

        
    })
    */

//     it ('Search for "Burberry" keyword, select 1st suggestion, select 1st product, select a size and add to basket', function() {
        

//         SearchFor('Burberry');


        

//         SelectFirstSuggestionAndProduct();

//         // cy.get('div.CombinedSelect9__customizedSelect').click();
//         // cy.get('div.CombinedSelect9__customizedSelect > ul:nth-child(2) li:nth-child(1)').click();
//         // cy.get('div.CTAButtons43 > div:nth-child(1)').click().should('have.text','View Shopping Bag');

//         SelectSizeAndAddToBag();

//         // cy.get('.SearchPanel1__wrapper').click();
//         // cy.get('.SearchOverlay1__input').type('Burberry');
        


        

        
//     })


  //cy.get('.article').find('footer') // Yield 'footer' within '.article'
