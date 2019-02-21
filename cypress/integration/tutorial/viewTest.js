import { SearchFor, SelectFirstSuggestionAndProduct, SelectSizeAndAddToBag } from '../../../cypress/integration/tutorial/POM/myFirstPage'
import { urls , viewports} from "../../../cypress/support/viewPorts.js"

viewports(urls, () => {
	describe('My First Test', function() {
        it ('Search for a keyword, select 1st suggestion, select 1st product, select a size and add to basket', function() {
            SearchFor('Burberry');
            SelectFirstSuggestionAndProduct();
            SelectSizeAndAddToBag();              
        })   
    })
});