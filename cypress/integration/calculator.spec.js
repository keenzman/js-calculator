describe("My first test", () => {
  it("Should visit our calculator", () => {
    // goes to the given url and open it on a browser that is controlled by Cypress
    // If you use empty quotations "", it would go to the live server anyway.
    // But this is best practice to put in the url
    cy.visit("http://127.0.0.1:5501/");
  });

  it("Should contain 0", () => {
    // gets document.elem by classname
    cy.get(".zero").contains("0");
  });
});
