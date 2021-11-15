// For DotNet developers
describe("Blazor", () => {
  beforeEach(() => {
    cy.visit("https://localhost:7173/");
  });

  it("should display Blazor app", () => {
    cy.contains(/hello, world!/i);
    cy.contains(/blazor/i);
  });

  it("should navigate to Counter Page", () => {
    cy.get("[data-cy=nav-counter-button]").click();
    cy.contains("Click me").click();
    cy.contains("0").should("not.exist");
  });
});
