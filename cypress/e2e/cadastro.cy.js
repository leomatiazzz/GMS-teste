/// <reference types="cypress"/>

// Lembrar de aplicar o ".only" depois de cada it (iteração de validação) para testar cada uma das validações, ou vai dar uma bugada monstra
// Exemplo: it.only("Deve fazer tal coisa... etc...") {...}

describe("US-012-Funcionalidade: Cadastro de membros", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("Deve fazer o cadastro de campos obrigatórios.", () => {
    var email = `leo${Date.now()}@teste.com`;
    cy.preencherCadastro("Leo", "Matias", email, "88997135636", "Teste123#");
    cy.get("#signup-response").should(
      "contain",
      "Cadastro realizado com sucesso!"
    );
  });

  it("Deve validar erro ao tentar cadastrar com email já existente", () => {
    var email = `leo${Date.now()}@teste.com`;

    // Primeiro cadastro
    cy.preencherCadastro("Leo", "Matias", email, "88997135636", "Teste123#");
    cy.get("#signup-response").should(
      "contain",
      "Cadastro realizado com sucesso!"
    );

    // Segundo cadastro usando o mesmo email
    cy.preencherCadastro("Leo", "Matias", email, "88997135636", "Teste123#");
    cy.get("#signup-response").should(
      "contain",
      "Este email já está cadastrado."
    );
  });

  it("Deve validar mensagem de erro com o campo Nome inválido", () => {
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

  it("Deve validar mensagem de erro quando o campo Nome estiver vazio", () => {
    var email = `leo${Date.now()}@teste.com`;
    cy.preencherCadastro(
      undefined,
      "Matias",
      email,
      "88997135636",
      "Teste123#"
    );
    cy.get("#signup-response").should("contain", "Nome não pode estar vazio");
  });

  it("Deve validar mensagem de erro quando o campo Sobrenome estiver vazio", () => {
    var email = `leo${Date.now()}@teste.com`;
    cy.preencherCadastro("Leo", undefined, email, "88997135636", "Teste123#");
    cy.get("#signup-response").should(
      "contain",
      "Sobrenome não pode estar vazio"
    );
  });

  it("Deve validar mensagem de erro para email inválido", () => {
    cy.preencherCadastro(
      "Leo",
      "Matias",
      "emailinvalido",
      "88997135636",
      "Teste123#"
    );
    cy.get("#signup-response").should(
      "contain",
      "E-mail deve ser um email válido"
    );
  });

  it("Deve validar senha fraca", () => {
    cy.preencherCadastro(
      "Leo",
      "Matias",
      "email@teste.com",
      "88997135636",
      "123" // senha muito fraca
    );
    cy.get("#signup-response").should(
      "contain",
      "Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)"
    );
  });
});
