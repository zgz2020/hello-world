// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
  
Cypress.$.expr[':'].bem = function (elem, index, match) {
    let bemRegex = getBEMRegex(match[3])
    const regex = new RegExp(bemRegex.replace(/^\s+|\s+$/g, ''), 'ig');
    return regex.test(Cypress.$(elem)['attr']('class'));
}

function getBEMRegex(bemSelector) {
    let regexSelector = ""
    if(bemSelector.includes("__")){
        regexSelector = bemSelector.replace('__', '\\d*__');
    } else if(bemSelector.includes('--')) {
        regexSelector = bemSelector.replace('--', '\\d*--');
    } else {
        regexSelector = bemSelector + '\\d*';
    }
    return `\\b${regexSelector}\\b`
}
