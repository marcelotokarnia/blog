---
title: Como melhorar a sua experiência de Customer Support com correlation ids
summary: Telas de erro padrão como "Algo deu errado" não ajudam a investigar problemas do usuário
date: 2021-09-30
author: Marcelo Tokarnia
authorPic: https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_150,w_150,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg
tags: React,Logs,CustomerSupport,Troubleshooting
---

E quando eu digo que ninguém fica feliz com uma tela de erro padrão, eu não estou me referindo somente ao cliente final da aplicação, que fica, obviamente, frustrado ao tentar fazer alguma ação e se deparar com esse bloqueio no seu caminho. Mas também me refiro ao serviço de atendimento, que recebe uma foto dessa tela nada informativa e se vê em um impasse de como ajudar esse cliente sem muitas informações úteis sobre o que aconteceu.

<div style="text-align: center"><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1633192462/blog/1_nNXspcgeGMiQYHsguYDghg_maqyai.png" /><p>Para erros não mapeados pela plataforma, essa era a nossa tela / mensagem de erro. Não ajuda muito, né ?</p></div>

Eventualmente esse pedido de ajuda acaba chegando aos desenvolvedores, que também sentem não ter as informações necessárias para ajudar e fazem perguntas como: "Quem foi esse cliente?", "Quando isso aconteceu ?" ou "Qual ação o usuário estava tentando realizar ao ver essa tela ?" e obviamente você já pode imaginar que esse telefone sem fio entre vários envolvidos na comunicação não é muito eficiente e poderia acabar em nada sendo resolvido.

Uma prática comum para resolver esse tipo de problema de comunicação é o uso de `correlation ids`.

---

## O que são correlation ids e como eles podem me ajudar ?

Depois de muito trabalho, adicionamos uma linha de texto a mais a essa tela de erro. Você percebe a diferença ?

<div style="text-align: center"><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1633192494/blog/1_xiu_tlZDPOYx9V8c0nKAhQ_tobw3e.png" /><p>Agora existe um código único para cada erro.</p></div>

Esse código único em cada tela de erro é o `correlation id`. Basta sabermos esse código em negrito que conseguimos identificar a hora, o usuário, qual ação falhou, alguns logs específicos daquela requisição para o nosso sistema e várias outras informações úteis para podermos atender melhor os nossos clientes.

Pense nesse código como um localizador de uma passagem de avião. Ao fazer o check-in, você não precisa dizer nome, telefone, documentos, destino, basta dizer algumas poucas letras e números que o sistema já vai saber tudo sobre aquela passagem, inclusive quando e por quanto foi comprada caso alguma correção seja necessária.

---

Aqui no isaac, acreditamos que, tão importante quanto trabalhar para diminuir os erros do sistema, é nos empoderar para entendermos e sanarmos rapidamente os erros inesperados que ainda aconteçam.

Por sermos uma startup com crescimento acelerado, constantemente nos vemos no dilema de custo-benefício das estratégias, principalmente em termos de tempo de desenvolvimento.

Fizemos umas três ou quatro diferentes telas de erros para ser o mais informativo possível em relação aos erros mais comuns, que o próprio usuário poderia resolver, por exemplo "CPF inválido". Poderíamos desenvolver outras 20 telas de possíveis erros, que incluiriam até algo como "Nosso provedor de boletos está fora do ar". Sim, já aconteceu e não, não temos uma tela de erro específica para esse caso, pois entendemos que:

- Esse erro é bem raro, pois nosso provedor costuma ter um uptime bem alto.
- Mesmo se esse erro fosse bem comunicado, não seria muito acionável ao usuário, no máximo ele poderia tentar novamente em breve.
- Simplesmente não vale a pena gastarmos tempo de desenvolvimento e planejamento comunicando todos os possíveis casos de erro, e termos uma lógica complexa para identificar qual dessas mensagens mostrar em cada erro.

Quanto de valor isso adicionaria ao nosso cliente final ? E se tivéssemos de optar entre entregar mais telas de erro ou melhorar a experiência de pagamento direto na escola ?

Diariamente buscamos soluções mais inteligentes, de baixo esforço para atendermos problemas de mais baixo impacto. Para termos energia suficiente para investir a maior parte do esforço em problemas de mais alto impacto, que gerem mais valor ao nosso cliente final.

--

## O que eu preciso saber para implementar correlation ids no meu produto ?

Se você não tem um perfil técnico de desenvolvimento web ou no mínimo é bastante curioso, creio que o resto desse conteúdo não será para você. Agradeço a leitura até aqui e espero que você tenha ficado tão feliz quanto eu com essa nova ferramenta do isaac para solucionar mais rapidamente os problemas dos clientes com o menos interações e mais eficiência.

Mas se você está lendo até aqui, e principalmente se você pretende implementar algo parecido para o seu produto, seguem algumas diretrizes gerais para aproveitar o máximo dos `correlation ids`:

1. Todos os sistemas devem padronizar uma forma para armazenar os `correlation ids` entre requisições. Geralmente isso é feito via request headers requisições HTTP, mas também podem ser trocados via fields específicos em uma mensagem enviada para uma fila, por exemplo.
2. `Correlation Ids` representam um fluxo no sistema, geralmente inicializados pelo usuário, mas não necessariamente. Isso significa que esse fluxo pode envolver mais de um request, em múltiplos micro serviços e todos terão o mesmo `correlation id`.
3. Esse `correlation id` deve ser armazenado no contexto do request e todos os logs gerados a partir desse request devem conter esse `correlation id` como uma chave "buscável".
4. Quando o frontend identificar algum erro no sistema, ele deve ser capaz de ler o `correlation id` do último request que falhou e apresentá-lo ao usuário de maneira fácil.

---

## Exemplos de implementação dos principais pontos mencionados acima

`Correlation ids` é um conceito de aplicação que independe da sua escolha de frameworks / ferramentas / linguagem de programação. Portanto, dependendo da stack, e da arquitetura da aplicação essa implementação pode ser mais fácil ou mais difícil.

Abaixo vou isolar alguns conceitos principais em pseudo-código (inspirado em alguns setups de js)

### 1. Padronização de onde armazenar o correlation id

Por exemplo no header `x-correlation-id`. A cada request que chegar no seu sistema, se não houver esse header, crie um novo id, provavelmente é o início de um fluxo, se já houver esse header, esse request não é o começo de um ciclo. A cada request que sair do seu sistema, atribua também esse header com o mesmo `correlation id`.

<div style="text-align: center"><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1633192503/blog/1_zV-8nOm3EcPngySoKVNRdw_zysh9h.png" /><p>Isso pode ser exportado para um package e usado como middleware comum de todos os serviços</p></div>


### 2. Não confundir `correlation id` com request-id.
Como exemplificado na última linha do código anterior, o `correlation id` é transferido entre sistemas para facilitar a rastreabilidade dos logs do fluxo como um todo entre os micro serviços.

<div style="text-align: center"><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1633192511/blog/1_8t6cDf6E6Mh5xhLLynHsgw_xf68ug.png" /><p>Nesse exemplo simples temos 1 `correlation id` e 3 request ids</p></div>

### 3. Todos os logs gerados a partir desse request devem ter o `correlation id` como uma chave buscável.

<div style="text-align: center"><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1633192518/blog/1_vBuUHk8zHA1xUth7Rbh3gw_ut0n8u.png" /><p>Adicionando correlation id ao contexto do logger para cada request</p></div>

### 4. Identificando o `correlation id` do último request que falhou com React Hooks.

<div style="text-align: center"><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1633192531/blog/1_3cE9LsSZC6vMywXs5kk4RQ_wqj6cm.png" /><p>Colocamos um React.Context ao redor de toda a aplicação para as informações de `correlation id` estarem disponíveis em qualquer lugar</p></div>

<div style="text-align: center"><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1633192540/blog/1_yXNN5ER4djOKJ6G8tD87_w_iduhfy.png" /><p>Fazemos um proxy no axios para qualquer erro ser interceptado e popular o `correlation id` do context acima</p></div>

<div style="text-align: center"><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1633192548/blog/1_zJ7uB2wdOxAn9q5gzKoY-g_apctxs.png" /><p>Se o erro for relacionado a um request, correlationId vai existir e será mostrado na tela</p></div>

De novo, essa estratégia é um conceito e não está restrita a uma linguagem específica ou framework específico, então não se desespere caso a sua aplicação não use React ou o seu frontend não use axios.

Muito provavelmente os trechos de código não funcionarão ao pé da letra, para a sua realidade específica por mil motivos, mas com um pouco de criatividade esses conceitos podem ser convertidos para qualquer cenário.
