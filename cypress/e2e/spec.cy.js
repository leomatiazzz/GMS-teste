/// <reference types="cypress"/>

describe("US-012-Funcionalidade: Cadastro de membros", () => {
  it("Deve fazer o cadastro de campos obrigatórios.", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.get("#signup-firstname").type("Léo");
    cy.get("#signup-lastname").type("Araújo");
    cy.get("#signup-email").type("leo25matias@hotmail.com");
    cy.get("#signup-phone").type("88973642379");
    cy.get("#signup-password").type("Teste#2020");
    cy.get("#signup-button").click();
    cy.get("#signup-response").should(
      "contain",
      "Cadastro realizado com sucesso!"
    );
  });
});
