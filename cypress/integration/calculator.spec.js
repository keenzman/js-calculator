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

describe("Addition operator", () => {
  it("Should equal 10", () => {
    cy.get(".five").click();
    cy.get(".addition").click();
    cy.get(".five").click();
    cy.get(".equals").click();

    // cy.get(".calculator__screen").contains("10");

    // this works if you used <input> for display
    // cy.get(".calculator__screen").should("have.value", 10);

    // works for any tag
    cy.get(".calculator__screen").should("contain", 10);
  });
});

describe("Multiply operator", () => {
  it("Should equal 15 and have one output displayed", () => {
    cy.get(".clear").click();

    cy.get(".three").click();
    cy.get(".multiply").click();
    cy.get(".five").click();
    cy.get(".equals").click();

    cy.get(".calculator__screen").should("contain", 15).and("have.length", 1);
  });
});
