<<<<<<< HEAD
<<<<<<< HEAD
// Edit 'fridayBranch'

=======
>>>>>>> commit on my branch
=======
>>>>>>> 564dccca38116323f2c2dc365a747ac4b9972c92
import { SearchFor, SelectFirstSuggestionAndProduct, SelectSizeAndAddToBag } from '../../../cypress/integration/tutorial/POM/myFirstPage'

describe('My First Test', function() {
    it ('Search for "Burberry" keyword, select 1st suggestion, select 1st product, select a size and add to basket', function() {
        cy.visit('/');
        SearchFor('Burberry');
        SelectFirstSuggestionAndProduct();
        SelectSizeAndAddToBag();          
    })   
})
