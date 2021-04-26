---
title: Top 8 extensões do VSCode que todo Fullstack deveria conhecer
summary: Nos meus últimos 5 anos de código, venho usando, principalmente o VSCode como IDE. E para turbiná-la ainda mais, uso alguns esteróides, digo, extensões que eu gostaria de compartilhar.
date: 2021-04-22
author: Marcelo Tokarnia
authorPic: https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_150,w_150,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg
tags: VSCode,Extensions,IDE
---

Muitos programadores utilizam diariamente IDEs (Integrated Development Environment). IDEs são basicamente editores de texto "com super-poderes", que fornecem funcionalidades auxiliares na arte de programar, como por exemplo: autocomplete, documentação inline, syntax highlight, formatação de código, debuggers e muito mais.

Muitas IDEs existentes no mercado, são construídas com o foco em uma linguagem ou nicho, como por exemplo [GoLand][:goland] (focada em Golang), [PyCharm][:pycharm] (focada em Python) ou [Eclipse][:eclipse] (focada em Java). 

[VSCode][:vscode] é uma IDE open-source desenvolvida pela Microsoft, e diferentemente da maioria, foi desenvolvida com a premissa de atender múltiplos nichos, oferecendo ferramentas básicas para todos os ambientes e também a possibilidade de ter essas funcionalidades extendidas pela comunidade para atender necessidades específicas. Tornando-se assim, [a mais popular IDE do mercado][:stack-overflow-annual-survey], especialmente entre Web Developers.

Aqui no [isaac][:linkedin-isaac] não é diferente, vários desenvolvedores optaram pelo VSCode para o desenvolvimento do nosso software de gestão escolar do futuro. E um dos motivos principais dessa preferência é o poder das extensões, nos garantindo a agilidade de desenvolvimento que precisamos nessa etapa inicial da empresa. 

Pela própria IDE, é possível acessar o Marketplace de extensões e começar a usá-las com um clique.

<div style="text-align: center">
  <img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1619105623/blog/vscodeextensions_qzsdg2.png" />
  <p>O ícone de 4 quadradinhos leva para o Marketplace (ou cmd+shift+X)</p>
</div>

Dentro do Marketplace você pode ler sobre cada extensão, ver ratings e downloads. Existem muitas e muitas extensões com usos muito específicos que provavelmente não se aplicam ao seu dia a dia de trabalho. Mas também existem muitas extensões, de uso mais genérico, que me ajudaram bastante em TODOS os codebases que trabalhei nesses últimos 5 anos e continuam me ajudando hoje no isaac, a seguir, listo 8 delas.

- [Gitlens (eamodio.gitlens)][:gitlens]
  
<div style="text-align: center">
  <img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1619106788/blog/gitlens_v5chsp.png" />
  <p>"Gitlens - Git Supercharged"</p>
</div>

Essa extensão combina os poderes do Git com a interface gráfica do VSCode, facilitando acompanhar a evolução de linhas e arquivos ao longo do tempo, por meio de buscas de commits, verificação de histórico. 

Além de ser altamente customizável, facilitando alterar / remover features que não lhe agradem.

A feature mais usada dessa extensão costuma ser a visualização rápida da última modificação de cada linha, como na screenshot acima. É possível facilmente ver quando e quem alterou a linha em foco por último e com hover, abrir essa popup com ainda mais informação, como o hash e body do commit, PR e foto do autor, assim você consegue facilmente parabenizá-lo pelo ótimo trabalho.

- [Prettier (esbenp.prettier-vscode)][:prettier]

<div style="text-align: center">
  <img src="https://res.cloudinary.com/marcelotokarnia/image/upload/v1619107537/blog/prettier_qi0zu4.gif" />
  <p>"Prettier - Code Formatter"</p>
</div>

Prettier é uma extensão bastante opinionada para formatar o seu código, que suporta múltiplas linguagens, obrigando todo o time a terem um code style consistente.

Para aumentar os ganhos com essa extensão, é possível configurar para formatação automática do arquivo ao salvar.

- [Eslint (dbaeumer.vscode-eslint)][:eslint]

Enquanto o Prettier é uma extensão de formatação de código quase agnóstica a linguagem, o Eslint consegue forçar muitas outras regras sintáticas de code style no seu código. E pode-se combinar os dois para formatação automática também de sintaxe ao salvar um arquivo.

Eslint é altamente customizável, tornando-se ainda mais poderoso por facilitar a importação e exportação de regras de lint (`eslint-config` packages). 

Dessa forma, por exemplo, é muito fácil importar [eslint-config-airbnb][:eslint-config-airbnb] e desenvolver o seu código com as mesmas regras de code style do airbnb (uma das mais populares hoje).

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

Essas 3 extensões resolvem problemas parecidos: Facilitar a identificação de contextos que se sobrepõe. 

Por exemplo, com múltiplas divs abrindo e fechando, uma dentro da outra, as vezes é chato identificar onde começa e onde termina um contexto, o mesmo ocorre com indentação e parentêses / colchetes / chaves. 

Esse combo de 3 extensões consegue te poupar bastante tempo em um trabalho chato de contar inícios e finais de contextos simplesmente os colorindo de forma diferente, tornando a identificação mais óbvia.

- [Import Cost (wix.vscode-import-cost)][:import-cost]

<div style="text-align: center">
  <img src="https://res.cloudinary.com/marcelotokarnia/image/upload/v1619109263/blog/import-cost_gfdzwu.gif" />
  <p>Feedback automático sobre custos</p>
</div>

É uma ótima extensão, especialmente para se trabalhar no frontend, onde, geralmente, performance é de grande importância. 

Você deveria evitar importar grandes pacotes levianamente. Essa extensão te alerta sobre o uso de grandes pacotes de acordo com limites de tamanho customizáveis.

E também coloca um hint de tamanho aproximado de cada pacote no seu código, para despertar um pouco mais de cuidado e conscientização sobre o que está sendo empurrado para o cliente.

- [Local History (xyz.local-history)][:local-history]

<div style="text-align: center">
  <img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1619468649/blog/local-history_mt2hgy.png" />
  <p>Salve todas alterações feitas nos seus arquivos</p>
</div>

Quem nunca deletou sem querer aquele arquivo super importante, perdendo algumas horas de trabalho por clicar no lugar errado ? ?

O git até nos ajuda com isso, mas quando você ainda ainda não está trackeando o arquivo ou esqueceu de adicionar as últimas mudanças feitas. Esta extensão guarda um histórico de todas as alterações nos seus arquivos, inclusive os deletados. 

A extensão não serve só como um fail safe, mas também para verificar a evolução do código comparado a algumas horas no passado. 

## Conclusão

Algumas pessoas mais "puristas" podem argumentar que todas essas informações podem ser encontradas em outras fontes, por exemplo: 
  - erros de lint não precisam ser apontados na minha tela, eu posso rodar o linter na linha de comando
  - o histórico do git não precisa ficar no meio do meu código, eu posso rodar na linha de comando / abrir o repositório no browser
  - o tamanho dos pacotes também não precisa estar na minha IDE, eu posso verificar a versão compilada ou ver essa informação no NPM

Mas quanto tempo você demoraria para achar todas essas informações ? Muitas extensões podem te poupar alguns segundos por operação, que facilmente se somam em horas por semana e até dias por mês.

Mas também é verdade que o excesso de _hints_ na tela pode ser confuso, pois realmente tem um peso cognitivo muito maior (imagine a mesma linha com um highlight diferente, sublinhada, dizendo o peso do import e a git history).

Minha dica é, adicione uma ou duas extensões de tempos em tempos e avalie se ela realmente te trás benefícios ou não, tente customizá-las, talvez habilitando somente um subset de features e depois decida se você prefere mantê-las ou removê-las. Nem todas as tarefas PRECISAM ser feitas exclusivamente pela IDE. 

E você ? Também usa o VSCode ? Quais são as suas extensões preferidas ? 

Conhece alguém que poderia se beneficiar de alguns minutos extras por dia ? Recomende esse artigo 👍🏻

## Sobre mim 

Eu me chamo [Marcelo Tokarnia][:linkedin-marcelo] e sou Engenheiro de Software no [isaac][:linkedin-isaac]. Trabalho na área a cerca de 10 anos, metade dos quais, venho usando [VSCode][:vscode] como minha IDE de preferência para codar.

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