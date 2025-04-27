/// <reference types="cypress"/>

describe("US-012-Funcionalidade: Cadastro de membros", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve fazer o cadastro de campos obrigatórios.", () => {
    var email = `leo${Date.now()}@teste.com`;
    cy.preencherCadastro("Leo", "Matias", email, "88997135636", "Teste123#");
    cy.get("#signup-response").should(
      "contain",
      "Cadastro realizado com sucesso!"
    );
  });

  it.only("Deve validar mensagem de erro com o campo Nome inválido", () => {
    cy.preencherCadastro(
      "Leo20",
      "Matias",
      "fabio@teste.com",
      "88997135636",
      "Teste123#"
    );
    cy.get("#signup-response").should(
      "contain",
      "Nome deve conter apenas caracteres alfabéticos, acentuados e espaços"
    );
  });
});
