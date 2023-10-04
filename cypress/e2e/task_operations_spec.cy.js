describe("Task Operations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
    cy.get("[data-testid=username]").within(() => {
      cy.get("input").type("username");
    });
    cy.get("[data-testid=password]").within(() => {
      cy.get("input").type("password");
    });
    cy.get("button[type=submit]").click();

    const taskName = "New Task";
    cy.get("[data-testid=newTask]").within(() => {
      cy.get("input").type(taskName);
    });
    cy.get("[data-testid=addTask]").click();
  });

  it("should add a new task", () => {
    const taskName = "New Task";
    cy.contains(taskName).should("exist");
  });

  it("should update an existing task", () => {
    const updatedTaskName = "New Task updated";
    cy.get("[data-testid=editTask]").first().click();
    cy.get("[data-testid=editTitle]")
      .first()
      .within(() => {
        cy.get("input").type(" updated");
      });
    cy.get("[data-testid=editTask]").first().click();
    cy.contains(updatedTaskName).should("exist");
  });

  it("should mark a task as done", () => {
    cy.get("[data-testid=toggleDone]").first().click();
    cy.get("[data-testid=taskItemTitle]").first().should("have.class", "done");
  });

  it("should remove a task", () => {
    const taskName = "New Task";
    cy.contains(taskName).should("exist");
    cy.get("[data-testid=removeTask]").first().click();
    cy.contains(taskName).should("not.exist");
  });
});
