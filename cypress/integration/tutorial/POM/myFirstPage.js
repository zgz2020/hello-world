// Selectors
const searchField = ':bem(SearchPanel__wrapper)';    // '.SearchPanel1__wrapper';
const searchInput = ':bem(SearchOverlay__input)'; // '.SearchOverlay1__input';
const searchResult1 = ':bem(SearchResults) > ul:nth-child(1) li:nth-child(2) a';  //  'div.SearchResults1 > ul:nth-child(1) li:nth-child(2) a';
const firstProduct = ':bem(ProductListingPage__listingGrid) > :nth-child(1)'; //'div.ProductListingPage32__layoutGrid div a:nth-child(1)';
const sizeSelector = ':bem(CombinedSelect__customizedSelect)';  // 'div.CombinedSelect9__customizedSelect'; 
const firstSize = ':bem(CombinedSelect__customizedSelect) > ul:nth-child(2) li:nth-child(1)';  // 'div.CombinedSelect9__customizedSelect > ul:nth-child(2) li:nth-child(1)';
const addToBag = ':bem(CTAButtons) > div:nth-child(1)'; // 'div.CTAButtons43 > div:nth-child(1)';
        
const SearchFor = (keyword) => {
    cy.get(searchField).click()
        .get(searchInput).type(keyword);
}  

const SelectFirstSuggestionAndProduct = () => {
    cy.get(searchResult1).click()
        .get(firstProduct).click();
}

const SelectSizeAndAddToBag = () => {
    cy.get(sizeSelector).click()
        .get(firstSize).click()
        .get(addToBag).click().should('have.text','View Shopping Bag');
}

module.exports = { SearchFor, SelectFirstSuggestionAndProduct, SelectSizeAndAddToBag }