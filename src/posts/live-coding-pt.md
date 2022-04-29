<!-- ---

Não só com código se faz um live coding
Live coding é um tipo de entrevista cada vez mais comum na indústria tech e hoje, onde basicamente tenta-se recriar um ambiente real de trabalho, fornecendo ao candidato um problema, com alguns requisitos e espera-se uma discussão construtiva para se chegar a uma solução em um determinado tempo limite. 
Depois de participar de pelo menos 50 entrevistas de cada lado da mesa eu resolvi escrever um pouquinho sobre o que os entrevistadores esperam de um candidato nessa etapa técnica e como você pode se dar bem nessa entrevista.
Claro, muitos aspectos vão influenciar BASTANTE no resultado, como por exemplo, timidez pode te inibir de expressar suas idéias do melhor jeito possível, ou talvez por causa de nervosismo / ansiedade com a pressão da entrevista simplesmente te dê um grande branco em um problema que você resolveria se não estivesse sendo observado por estranhos.
A boa notícia é que com prática a maioria desses problemas tendem a diminuir rapidamente, seguem alguns sites com listas de problemas semelhantes aos que você encontraria em uma entrevista:
LeetCode
HackerRank
AgileKatas
CodeSignal

Você pode começar fazendo alguns problemas por si só, fazer um pair programming com algum amigo para resolverem juntos, quem sabe algum conhecido um pouco mais sênior possa fingir que está te entrevistando e te dar alguns feedbacks, ou você pode gravar alguns vídeos falando para a câmera e resolvendo os problemas e mandar para alguns amigos te darem um feedback. Ou até realmente fazer mais entrevistas, para empresas reais, vagas reais. É normal falhar nas primeiras vezes, mas com um pouco de paciência e resiliência psicológica, com sorte você encontra alguns bons entrevistadores pelo caminho que irão te dar feedback de como melhorar.

---

"Tudo bem, e além do continuar treinando, o que mais é possível fazer para melhorar minhas chances de passar em um live coding ? Sinto que eu tenho habilidade técnica o suficiente mas continuo falhando, o que me falta ? Quais pontos eu devo prestar atenção em cada etapa da entrevista ?"
Introdução
Nessa etapa lhe será apresentado um problema, algumas condições de contorno, talvez um tempo limite. 
Essa é a sua oportunidade de fazer o máximo de perguntas possível para entender o problema. Espera-se do candidato uma capacidade de antecipação das situações que vão surgir pela frente, portanto, desde antes de você começar a escrever o código você já está sendo avaliado. Inclusive, algumas vezes o enunciado é propositalmente vago justamente para forçar o candidato a perguntar. 
Claro, isso vai muito de problema a problema e, de novo, essa habilidade você só consegue na prática. Eu não posso te dar o caminho das pedras, mas posso te dar um exemplo.
Enunciado: 
Você receberá uma string como input e espera-se que você remova vogais, uma sim, uma não (output).
Repare que, de propósito, esse é um exemplo BEM ruim de enunciado, e quase que força o candidato a fazer perguntas antes de começar a desenvolver. Mas uma dica geral é: "Mesmo que o enunciado pareça bem claro, faça ao menos 3 perguntas, nem que sejam retóricas, dando exemplos de resultados esperados para cada conjunto de inputs, só para validar o seu entendimento, ou sobre o teste em si, tempo limite e linguagem de programação esperada".
Exemplos de perguntas: 
Ok, devo remover vogais intercaladamente, mas eu removo as ocorrências ímpares ou as pares? Por exemplo, se o input for: "balaio", a resposta esperada é "blao" ou "bali" ?
Devo considerar maiúsculas e minúsculas ? Preciso me preocupar com acentuação gráfica ? Quais ? Por exemplo, quais dos caracteres a seguir estão no escopo do problema ? Algum caracter não seria considerado uma vogal ? [A, ä, å, á, à, ã, â, …]
Parecido com a pergunta acima, mas dependendo se você estiver fazendo uma entrevista para o exterior, em outras línguas, às vezes o grupo de vogais pode ser diferente. O que eu devo considerar uma vogal ? [y, j, æ] ?
Quanto tempo eu tenho para resolver ?
Já antecipando uma pergunta da etapa de resolução, pois os entrevistadores adoram conversar sobre complexidade de algoritmo: Existe alguma expectativa em relação a complexidade do algoritmo final ?

---

Execução
Agora chegou a fase da resolução do problema. Mas lembre-se, apesar de, muitas vezes sim, existir um tempo limite para a resolução do problema, esse não é um teste de velocidade, e mesmo que você já tenha um plano perfeitamente traçado na sua cabeça sobre como atacar o problema, você está sendo principalmente testado na sua capacidade de comunicar bem esse plano antes de executá-lo. Portanto a melhor dica para a fase de resolução é: "Comece escrevendo em texto, não em código". Diga o passo a passo do que você pretende fazer e quais os indicadores irão dizer que você está indo no caminho certo em cada etapa do processo.
Idealmente seria ótimo que você transmitisse essa mensagem de ponta a ponta do problema, chegando a uma solução antes de começar a escrever o código, mas também está tudo bem se você ao menos estiver fazendo esse processo iterativamente e sempre escrevendo em texto antes de escrever em código a próxima etapa do processo.
Lembre-se, comece simples, uma solução funcional em O(n²) é melhor do que uma solução incompleta em O(log n). E uma solução O(n²) pronta pode te ajudar a evoluir para uma solução O(log n) depois, e na verdade alguns entrevistadores nem vão pedir essa evolução, então só comece pela mais complicada caso você tenha muita certeza do que você está fazendo.
Por exemplo: 
Vou instanciar variável boolean indicando se eu devo ou não remover a próxima vogal
Vou fazer um loop pelos caracteres da string e verificar se são vogais
Dentro do loop, caso o carácter seja uma vogal, se o boolean indicar que eu devo remover a vogal eu removo, depois eu troco o valor do semáforo independentemente se a vogal foi removida ou não.

Exemplo de resposta completaAlém disso, lembre-se de escutar, quando o entrevistador falar algo, provavelmente ele está tentando te dar uma dica de um caminho a seguir. Não necessariamente você precisa seguir aquele caminho, mas ignorar, sem ao menos discutir a possibilidade também mostra que você não trabalha bem em equipe, então cuidado.

---

Lembre-se: Não tem problema rodar o programa, assim como no dia a dia de trabalho, raramente acertamos algo de primeira, durante a entrevista, você não está sendo avaliado baseado na quantidade de vezes que você "deu o play". Utilize essa ferramenta para validar resultados parciais e lembre-se sempre de comunicar bem a sua estratégia, por exemplo:
Vou começar o problema implementando essa lógica para verificar se o carácter é uma vogal e removê-lo. 

Depois de implementar esse trecho eu rodaria o programa para alguns inputs e avaliaria o resultado. Esse não é o resultado final esperado, mas evoluindo com baby steps pode nos ajudar a organizar e explicar melhor nosso raciocínio, e evidenciar onde estão possíveis erros ao longo do caminho.
Exemplo de resposta parcial, que poderia te guiar até a soluçãoAntes de finalizarmos a etapa de execução, eu gostaria de lembrar que essa é uma grande oportunidade para você mostrar, na prática, suas habilidades de escrever um código limpo, autoexplicativo, autodocumentado, sem acoplamentos desnecessários, portanto aproveite bem essas chances para tomar cuidado com: 
Não criar métodos muito longos, extraia quando necessário
Evite variáveis globais
De nomes explicativos às variáveis e métodos, evite nomes como "a", "b", "c". Sim, no exemplo eu dei o nome de uma variável de "c" para representar o carácter, mas essa variável tinha escopo limitado a basicamente uma cláusula, nesses casos pode ser aceitável, mas na dúvida, dê sempre nomes mais descritivos como "character" ao invés de "c".
Preze pela legibilidade, evite atalhos. Você está sendo avaliado pela clareza do código, não em velocidade, portanto, por exemplo, em javascript, prefira Boolean(isOdd) ao invés de !!isOdd.
Seja consistente e de preferência siga padronizações de mercado, por exemplo não crie algumas variáveis em português, outras em inglês, algumas em camelCase, outras em snake_case.

Validação
Tão importante quanto escrever um bom código, é ter certeza que esse código funciona. No dia a dia de trabalho fazemos testes automatizados para isso, mas em uma entrevista podemos, ao menos mostrar essa mentalidade de cuidado com o código com algumas linhas extra de código que vão provar para o seu entrevistador que você tem um GRANDE DIFERENCIAL que muitos outros candidatos não tem.
Exemplo real, que eu já usei em várias entrevistas quando eu era candidato, para substituir os últimos "console.log" no final dos exemplos acima, que agrega muito mais valor ao seu código final e perfil como candidato:
Um loop, um if-else e 2 console.log nos dão um mini test framework muito útil para live codingsEsse é um jeito simples escrever casos de teste e validar as respostas esperadas com o seu entrevistador. Ao perceber mais casos interessantes para serem testados é simples de adicionar mais casos de teste e garante que para qualquer alteração no código, todos os casos de teste serão processados novamente.
E principalmente, erros serão evidenciados e o seu algoritmo só estará validado quando todos os testes passarem, inclusive os testes podem ser escritos antes da resolução do problema, o que também te dará alguns pontos extras por implementar TDD.
Nesse exemplo fica claro que eu não me preocupei com acentos na minha implementação da resposta, mas pelo menos funciona para letras maiúsculas e minúsculas, então caso o entrevistador diga que sim, precisamos considerar acentos eu deveria voltar no meu código e fazer algumas mudanças.

---

Contra avaliação
Um ponto comumente esquecido é que, durante uma entrevista o candidato também está avaliando o entrevistador, então fique atento a sinais que te indiquem se você gostaria ou não trabalhar com aquela pessoa que está te entrevistando. 
Quando eu faço uma pergunta, a resposta é clara ?
Quando eu cometo algum erro, essa pessoa é paciente e me explica o erro ou perde a paciência ? Essa pessoa me trata com humildade ou me trata como um inferior.
Quando eu falo, essa pessoa escuta ? Ou tenta me interromper para impor um ponto de vista ?

Além disso, aproveite os minutos finais da entrevista para fazer algumas perguntas sobre o ambiente de trabalho, como por exemplo: 
Como a empresa encara trabalho remoto ? 
Quais são os rituais do time ? 
Quão flexível são os dias / horários ?
Qual é o tamanho do time e as competências de cada um ? 
Qual o regime de contratação ?
Quais as responsabilidades do time ? 
A quanto tempo você está na empresa e porque decidiu aceitar esse emprego ? (perguntando ao entrevistador)

---

Você também tem algumas dicas próprias que gostaria de compartilhar conosco ? Está aplicando para novas oportunidades no momento ou conhece alguém que merece uma ajudinha no próximo processo seletivo ? Compartilhe esse artigo. 
Aliás, agora que você está afiadíssime para live codings, eu te pergunto, quer trabalhar conosco ? Visite a nossa página de carreiras e quem sabe eu mesmo não te entrevisto. Vem com a gente transformar a educação do Brasil! -->