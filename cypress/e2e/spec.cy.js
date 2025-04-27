/// <reference types="cypress"/>

/*
describe("US-012-Funcionalidade: Cadastro de membros", () => {
  it("Deve fazer o cadastro de campos obrigatórios.", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.get("#signup-firstname").type("Léo");
    cy.get("#signup-lastname").type("Araújo");
    cy.get("#signup-email").type("leo26matias@hotmail.com");
    cy.get("#signup-phone").type("88973642378");
    cy.get("#signup-password").type("Teste#2020");
    cy.get("#signup-button").click();
    cy.get("#signup-response").should(
      "contain",
      "Cadastro realizado com sucesso!"
    );
  });
});
*/

describe("US-001 - Funcionalidade: Buscar filmes", () => {
  it("Deve buscar um filme existente", () => {
    cy.visit("http://127.0.0.1:8080/");

    cy.get("#search-input").type("Mononoke");
    cy.contains("Buscar").click();
    cy.contains("Mononoke").should("be.visible");
  });

  /*  
describe("US-001 - Funcionalidade: Buscar filmes", () => {  
  it("Deve exibir mensagem de erro para filme inexistente", () => {
    cy.visit("http://127.0.0.1:8080/");

    cy.get("#search-input").type("FilmeQueNaoExiste123");

    cy.contains("Buscar").click();

    // Verifica se aparece uma mensagem do tipo "Filme não encontrado"
    cy.contains("Nenhum filme encontrado").should("be.visible");
  });

  */
});

/*
A automação de buscas de filmes funcionou bem. Para testar as automações,
vá retirando o comentário de cada uma e comentando em bloco nas outras,
para não causar nenhum problema no script do código.
*/
