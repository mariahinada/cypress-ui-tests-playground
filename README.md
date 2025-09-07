# cypress-ui-tests-playground

# Objetivo
A ideia do repositório é explorar projetos de sandbox front/back e criar testes automatizados para eles. Então existem duas pastas principais:
`devfinance` -> Página desenvolvida pelo canal Agilizei, com o objetivo de ser utilizado em uma aula ao vivo sobre testes E2E
`saucedemo` -> Página desenvolvida pela SauceLabs. Teste automatizado refatorado*
`uitestingplayground` -> Playground gringo desenvolvido pela Inflectra, dentro dele existem diversos exercícios para colocar em prática

## Click (uitestingplayground)
Nessa pasta, temos testes automatizados de clique, onde o meu objetivo é zerar ou concluir todos os desafios que a página oferece

**uitestingplayground-click.cy**
Site: https://uitestingplayground.com/click
Objetivo do teste: Acessar a página, clicar no botão que ignora eventos DOM normais e verificar que a classe do botão mudou para `btn-success`

**uitestingplayground-dynamic-id.cy**
Site: https://uitestingplayground.com/dynamicid
Objetivo do teste: Acessar a página e verificar que o ID do botão muda a cada reload

**uitestingplayground-class-attribute.cy.js**
Site: http://www.uitestingplayground.com/classattr
Objetivo do teste: Acessar a página, clicar no botão azul e verificar o conteúdo do alert

## Visibility (uitestingplayground)
Nessa pasta, temos testes automatizados de visibilidade de elementos

**uitestingplayground-visibility.cy**
Site: http://www.uitestingplayground.com/visibility
Objetivo do teste: Acessar a página e conferir os botões visíveis. Clicar no botão "hide" que oculta os demais botões e, conferir que eles não estão mais visíveis

**uitestingplayground-hidden-layers**
Site: http://www.uitestingplayground.com/hiddenlayers
Objetivo do teste: Acessar a página, clicar no botão verde e, conferir se o botão azul o sobrepôs, tornando o verde inacessível. Depois forçar um clique no botão verde

**uitestingplayground-verify-text.cy.js**
Site: http://www.uitestingplayground.com/verifytext
Objetivo de teste: Acessar a página e verificar texto sem espaços
