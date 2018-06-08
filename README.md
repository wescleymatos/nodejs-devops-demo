# Node.js DevOps Demo.

Esta é uma demo inicial de DevOps para criação de "esteiras". Cada passo dentro dessa esteira é uma etapa de um ciclo que pode envolver, build do projeto (ex: Java, Go), testes de unidade, testes de integração, teste de aceitação, deploy da sua app para a cloud e, todo e qualquer outro passo que pode acontecer no seu processo.

## Afinal, o que é DevOps?

Se eu fosse resumir DevOps em uma palavra, eu diria que DevOps é uma **CULTURA**.

DevOps é uma combinação de uma cultura de colaboração com práticas e ferramentas que aumentam a capacidade de uma empresa a entregar soluções em alta velocidade, garantindo qualidade e estabilidade do produto (da sua aplicação).

Há alguns anos atrás, era comum ter times de desenvolvimento, de operação e de QA, cada um com objetivos separados, liderança separada e métricas de entrega separadas, o chamado "equipes em silos". Hoje o que acontece é o contrário. É muito mais comum você ter pessoas com skills diferentes dentro de um mesmo time.

Aqui dentro da IBM nós chamamos de "Cross-Functional Team". Dentro de um time temos Designer, Developers (Desenvolvedores), Analistas e outros tipos de profissionais que juntos, são capazes de entregar uma solução de ponta a ponta e ainda estar capacitada a manter uma aplicação, realizando manutenção e dando suporte.

Isso é uma mudança de mindset, que visa criar times com as skills necessárias para entregar soluções de ponta a ponta (end-to-end), e poder operar com o pós entrega, trabalhadno em conjunto com um único objetivo.

## Ferramentas de DevOps (CI/CD)

Sabemos que além da cultura que é criada com DevOps, existem ferramentas que podem te ajudar a automatizar processos, como a esteira de ponta a ponta. Abaixo são uma lista das ferramentas mais conhecidas e utilizadas:

- [TravisCI](https://travis-ci.org)
- [CircleCI](http://circleci.com)
- [Jenkins](https://jenkins.io)
- [Drone](https://drone.io)
- [Delivery Pipeline (IBM Cloud)](https://console.bluemix.net/catalog/services/continuous-delivery)

Para esta demo, optei pelo Delivery Pipelina do IBM Cloud, pela simples e fácil integração com as aplicações hospedadas na plataforma cloud da IBM.

## Como criar a sua esteira?

Para este passo, é necessário criar uma conta no [IBM Cloud](https://console.bluemix.net). Relaxa, não será necessário colocar um cartão de crédito ou vender um rim! Quando você cria uma nova conta no IBM Cloud, você tem acesso a uma camada gratuita de serviços.

Após criar a sua conta, segue abaixo passo a passo o que você deve fazer, para integrar este projeto (ou qualquer outro) na sua aplicação em núvem em minutos.

1. Acesse o catálogo dentro do IBM Cloud

2. Filtre na aba lateral esquerda clicando no item "DevOps"

3. Clique no serviço **Continuous Delivery**

4. Renomeie o serviço (Este item é opcional) e clique no botão "Criar"

Pronto! Você já criou um serviço de esteiras. Bem simples!


## Configurando a esteira com a sua apliçacão

Gravei uma live no [Quarta Tech](https://www.facebook.com/pg/IBMGEP/videos/) explicando como criar uma esteira do zero, utilizando esta demo. Dê uma olhada no vídeo abaixo:

[![O que é DevOps e como utilizar no dia a dia](https://img.youtube.com/vi/5C4zA2WV9X0/0.jpg)](https://www.youtube.com/watch?v=5C4zA2WV9X0)
