// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

let arr = [1,2,3,4,5,6,7,8,9,10];
let str = ['A1', 'A2']

for(let i = 0; i < 10; i++) {
it('runs test A1', () => {
    cy.wait(1000);
    console.log('test A1 ' + str[i]);
})
}
