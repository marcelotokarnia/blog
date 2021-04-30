---
title: Top 8 extensões do VSCode que todo Fullstack deveria conhecer
summary: Nos meus últimos 5 anos de código, venho utilizando como ferramenta principal o VSCode como IDE, e para turbiná-la ainda mais, uso alguns "esteroides", digo, extensões que eu gostaria de compartilhar com você. 
date: 2021-04-22
author: Marcelo Tokarnia
authorPic: https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_150,w_150,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg
tags: VSCode,Extensions,IDE
---

Muitos programadores utilizam diariamente IDEs (Integrated Development Environment). IDEs são basicamente editores de texto "com superpoderes", que fornecem funcionalidades auxiliares na arte de programar, como, por exemplo: autocomplete, documentação inline, syntax highlight, formatação de código, debuggers e muito mais.

Muitas IDEs existentes no mercado são construídas com o foco em uma única linguagem ou nicho, como, por exemplo [GoLand][:goland] (focada em Golang), [PyCharm][:pycharm] (focada em Python) ou [Eclipse][:eclipse] (focada em Java). 

Já o [VSCode][:vscode], é uma IDE open-source desenvolvida pela Microsoft, e ao contrário da maioria, foi desenvolvida com a premissa de atender múltiplos nichos, oferecendo ferramentas básicas para todos os ambientes e de bônus ainda conta com funcionalidades estendidas pela comunidade para atender necessidades específicas, tornando-se assim, [a mais popular IDE do mercado][:stack-overflow-annual-survey], especialmente entre Web Developers.

Aqui no [isaac][:linkedin-isaac] não é diferente, vários desenvolvedores optaram pelo VSCode para o desenvolvimento do nosso software de gestão escolar. Um dos motivos principais dessa escolha, foi justamente essa questão das extensões que nos garantem a agilidade de desenvolvimento necessária nessa etapa inicial da empresa. 

Dica: pela própria IDE é possível acessar o Marketplace de extensões e começar a usá-las com um clique.

<div style="text-align: center">
  <img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1619105623/blog/vscodeextensions_qzsdg2.png" />
  <p>O ícone de 4 quadradinhos leva para o Marketplace (ou cmd+shift+X)</p>
</div>

Dentro do Marketplace você terá a descrição detalhada de cada extensão, os ratings e o número de downloads para embasar a sua escolha. Existem diversas extensões com usos muito específicos que provavelmente não se aplicam ao seu dia a dia de trabalho, mas existem outras de uso mais genérico, que provavelmente te ajudarão bastante em todos os code bases da sua jornada, do mesmo jeito que me ajudaram nesses últimos 5 anos e continuam me ajudando até hoje no isaac.

A seguir, as Top 8 extensões do VSCode que todo Fullstack deveria conhecer:

- [Gitlens (eamodio.gitlens)][:gitlens]
  
<div style="text-align: center">
  <img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1619106788/blog/gitlens_v5chsp.png" />
  <p>"Gitlens - Git Supercharged"</p>
</div>

Essa extensão combina a funcionalidade do Git com a interface gráfica do VSCode, o que facilita acompanhar a evolução de linhas e arquivos ao longo do tempo, através de buscas de commits e verificação de histórico. Essa extensão também é altamente customizável, o que te permite alterar/remover as features que não lhe agradem.

A feature mais usada dessa extensão costuma ser a "visualização rápida" da última modificação em cada linha, como na screenshot acima. De forma símples, é possivel ver quando e quem alterou a linha em foco por último e com "hover", abrir essa pop-up com ainda mais informações, como, por exemplo, o hash e body do commit, a PR e a foto do autor. Gosto muito dessa parte, pois de certa forma ela humaniza os códigos, dado que agora você consegue facilmente identificar e parabenizar cada um pelo ótimo trabalho.

- [Prettier (esbenp.prettier-vscode)][:prettier]

<div style="text-align: center">
  <img src="https://res.cloudinary.com/marcelotokarnia/image/upload/v1619107537/blog/prettier_qi0zu4.gif" />
  <p>"Prettier - Code Formatter"</p>
</div>

Prettier é uma extensão bem "opinionada" para a formatação de código, que também suporta múltiplas linguagens e acaba estimulando todo o time a ter um code style consistente.

Para aumentar os ganhos com essa extensão, é possível configurar a formatação automática do arquivo ao salvar.

- [Eslint (dbaeumer.vscode-eslint)][:eslint]

Enquanto o Prettier é uma extensão de formatação de código quase agnóstica à linguagem, o Eslint consegue forçar muitas outras regras sintáticas de code style no seu código. Você ainda pode combinar os dois para formatação automática de sintaxe ao salvar um arquivo.

Eslint é altamente customizável, tornando-se ainda mais poderoso por facilitar a importação e exportação de regras de lint (`eslint-config` packages). 

Dessa forma, fica fácil importar [eslint-config-airbnb][:eslint-config-airbnb] e desenvolver o seu código com as mesmas regras de code style do airbnb (uma das mais populares hoje), por exemplo.

- [Highlight Matching Tag (vincaslt.highlight-matching-tag)][:highlight-tag]
- [Bracket Pair Colorizer (coenraads.bracket-pair-colorizer)][:bracket-pair]
- [Indent Rainbow (oderwat.indent-rainbow)][:indent-rainbow]
<div style="display:flex; gap: 10px; align-items: flex-end">
  <div style="text-align: center; display:flex; flex-direction: column; ">
    <img src="https://res.cloudinary.com/marcelotokarnia/image/upload/v1619108661/blog/highlight-tag_gfqlqk.gif" />
    <p>"Highlight Matching Tag"</p>
  </div>
  <div style="text-align: center; ">
    <img src="https://res.cloudinary.com/marcelotokarnia/image/upload/v1619108835/blog/bracket-pair_m7if9e.png" style="margin-bottom: 120px" />
    <p style="">"Bracket Pair Colorizer"</p>
  </div>
  <div style="text-align: center; ">
    <img src="https://res.cloudinary.com/marcelotokarnia/image/upload/v1619108837/blog/indent-rainbow_ocw3u7.png" />
    <p>"indent-rainbow"</p>
  </div>
</div>

Essas 3 extensões trazem soluções parecidas: facilitar a identificação de contextos que se sobrepõe. 

Por exemplo, com múltiplas divs abrindo e fechando, às vezes uma dentro da outra, fica confuso identificar onde começa e termina um contexto, e o mesmo ocorre com a identificação de parenteses/colchetes/chaves. 

Esse combo de 3 extensões consegue te poupar bastante tempo já que facilita o trabalho massante de contar inícios e finais de contextos, colorindo-os de forma diferente, o que torna a identificação mais óbvia.

- [Import Cost (wix.vscode-import-cost)][:import-cost]

<div style="text-align: center">
  <img src="https://res.cloudinary.com/marcelotokarnia/image/upload/v1619109263/blog/import-cost_gfdzwu.gif" />
  <p>Feedback automático sobre custos</p>
</div>

Uma ótima extensão, especialmente para se trabalhar no front-end onde desempenho é chave.

É sempre recomendado que você não importe grandes pacotes levianamente. Essa extensão te alerta sobre o uso de grandes pacotes de acordo com limites de tamanho customizáveis. Outra facilitação é a possibilidade da criação de um hint de tamanho aproximado em da pacote no seu código. Tais ações podem te ajudar a ter uma noção maior sobre o que está sendo entregue para o cliente.

- [Local History (xyz.local-history)][:local-history]

<div style="text-align: center">
  <img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1619468649/blog/local-history_mt2hgy.png" />
  <p>Salve todas alterações feitas nos seus arquivos</p>
</div>

Quem nunca deletou sem querer aquele arquivo essencial e depois teve que perder algumas horas de trabalho refazendo tudo?

O git até que nos ajuda com essa questão, mas para os momentos em que você ainda não trackeou o arquivo ou esqueceu de adicionar as últimas mudanças feitas, esta extensão guarda um histórico de todas as alterações nos seus arquivos, inclusive os deletados! Garantindo assim, que você nunca mais perca horas por um miss click. 

A extensão não só serve como fail safe, como também te ajuda a verificar a evolução do código a partir de comparações com saves do passado. 

## Conclusão

Algumas pessoas mais "puristas" irão argumentar que todas essas informações podem ser encontradas em outras fontes, por exemplo: 
  - "erros de lint não precisam ser apontados na minha tela, posso rodar o linter na linha de comando"
  - "o histórico do git não precisa ficar no meio do meu código, posso rodar na linha de comando/abrir o repositório no browser"
  - "o tamanho dos pacotes também não precisa estar na minha IDE, dado que posso verificar a versão compilada ou ver essa informação no NPM"

Quanto tempo você demoraria para achar todas essas informações? Essa é a grande questão. Muitas extensões podem te poupar alguns segundos por operação, que somados acabam poupando horas e até mesmo dias durante um mês.

Apesar de serem facilitadores, é importante mencionar que o excesso de _hints_ na tela pode te atrapalhar também. Imagine a mesma linha com um highlight diferente, sublinhada, dizendo o peso do import e a git history, muita coisa, não? 

Minha dica é: adicione uma ou duas extensões por vez e avalie se ela realmente te trás benefícios. Lembre-se de que você pode customizá-las e ainda tem a possibilidade de habilitar somente um subset de features para depois decidir se você prefere mantê-las ou não. Nem todas as tarefas precisam ser feitas exclusivamente pela IDE. 

Conta pra a gente. Você também usa o VSCode? Quais são as suas extensões preferidas?
Compartilha aqui nos comentários, juntos podemos mais :) 

Conhece alguém que poderia se beneficiar tendo alguns minutos extras por dia? Recomende este artigo 👍🏻

## Sobre mim 

Me chamo [Marcelo Tokarnia][:linkedin-marcelo] e sou Engenheiro de Software no [isaac][:linkedin-isaac]. Trabalho na área há 10 anos e venho usando [VSCode][:vscode] como minha IDE de preferência para codar.

<!-- REFERENCES -->
[:linkedin-marcelo]: https://www.linkedin.com/in/marcelo-tokarnia-5a1ab2128/
[:linkedin-isaac]: https://www.linkedin.com/company/olaisaac/
<!-- IDEs -->
[:stack-overflow-annual-survey]: https://insights.stackoverflow.com/survey/2019#development-environments-and-tools
[:vscode]: https://code.visualstudio.com/
[:goland]: https://www.jetbrains.com/go/
[:pycharm]: https://www.jetbrains.com/pycharm/
[:eclipse]: https://www.eclipse.org/eclipseide/
<!-- Extensions -->
[:gitlens]: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
[:eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[:eslint-config-airbnb]: https://www.npmjs.com/package/eslint-config-airbnb
[:prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[:highlight-tag]: https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag
[:bracket-pair]: https://marketplace.visualstudio.com/items?itemName=coenraads.bracket-pair-colorizer
[:indent-rainbow]: https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow
[:import-cost]: https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost
[:local-history]: https://marketplace.visualstudio.com/items?itemName=xyz.local-history
