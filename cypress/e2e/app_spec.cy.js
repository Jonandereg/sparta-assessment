describe("Login", () => {
  it("should navigate to the login page and successfully log in", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("[data-testid=username]").within(() => {
      cy.get("input").type("username");
    });
    cy.get("[data-testid=password]").within(() => {
      cy.get("input").type("password");
    });
    cy.get("button[type=submit]").click();
    cy.url().should("include", "http://localhost:3000/");
  });
});

describe("Logout", () => {
  before(() => {
    cy.visit("http://localhost:3000/login");
    cy.get("[data-testid=username]").within(() => {
      cy.get("input").type("username");
    });
    cy.get("[data-testid=password]").within(() => {
      cy.get("input").type("password");
    });
    cy.get("button[type=submit]").click();
  });

  it("should log out the user", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("[data-testid=logOut]").click();
    cy.url().should("include", "/login");
  });
});
