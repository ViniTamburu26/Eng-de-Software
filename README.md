#Projeto "CleanUp" - Pipeline
##Visão Geral
Este projeto implementa um pipeline CI/CD completo para um sistema baseado em Vue.js (frontend) e um backend mockado, utilizando práticas de Continuous Integration (CI) e Continuous Delivery (CD). O pipeline automatiza todo o processo de construção, testes e deploy para ambientes de staging e produção.

O objetivo deste pipeline é garantir que o código seja continuamente validado e entregue de forma eficiente e segura, sem a necessidade de intervenção manual.

##Estrutura do Pipeline
O pipeline é composto de várias etapas que são executadas automaticamente toda vez que houver um commit na branch main. A seguir, explicamos cada uma dessas etapas:

Build e Testes Unitários do Frontend (Vue.js)

Instalamos todas as dependências do projeto.
Construímos o frontend com o comando npm run build.
Executamos os testes unitários para garantir que o código frontend está funcionando conforme o esperado.
Configuração do Backend Mockado e Validação de Integração

O backend mockado é iniciado para simular a comunicação com o frontend.
Validamos a integração entre o frontend e o backend para garantir que ambos estão trocando dados corretamente.
Testes de Integração

Executamos testes de integração para validar a interação entre o frontend e o backend mockado.
Publicamos os resultados dos testes para análise e rastreamento de falhas.
Deploy para Staging

Se os testes forem bem-sucedidos, o frontend é implantado em um ambiente de staging para mais testes.
Isso permite realizar testes finais em um ambiente controlado antes do deploy para produção.
Deploy para Produção

Após a validação no ambiente de staging, o pipeline faz o deploy final do frontend no ambiente de produção, tornando-o acessível aos usuários finais.