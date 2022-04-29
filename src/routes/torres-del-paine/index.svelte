<script context="module">
  export async function preload({ query, params }) {
    const res = await this.fetch(`torres-del-paine/data.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { paths: data.paths }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import Meta from '../../components/Meta.svelte'
  import BasicInfoWindow from '../../components/map/BasicInfoWindow.svelte'
  import InfoWindow from '../../components/map/InfoWindow.svelte'
  import Marker, { MARKER_TYPES } from '../../components/map/Marker.svelte'
  import Map from '../../components/map/Map.svelte'
  import Polyline from '../../components/map/Polyline.svelte'
  import waypoints from '../../travel-xp/torres-del-paine/waypoints'
  import classnames from 'classnames'
  import { PathIcon } from '../../components/map/icons'
  import { keys, fromPairs } from 'ramda'

  const center = { lat: -50.96136152378918, lng: -73.01903763212947 }
  const zoom = 11
  export let paths

  let drawerOpen = true
  let chosenMenu = 'paths'
  let waypointsFilter = fromPairs(keys(MARKER_TYPES).map(k => [k, true]))
</script>

<Meta
  title="Torres del Paine"
  description="O lugar mais bonito que eu já fui na minha vida"
  image="https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,h_627,w_1200,f_auto,q_auto/v1651191749/blog/travel-xp/torres-del-paine/mirante_los_cuernos_mzg4qb.jpg"
/>

<div><h1 class="tc">Torres del Paine - Circuito O</h1></div>

<div class="mb6">
  <img
    alt="acrobacias no mirador los cuernos em torres del paine"
    src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,h_627,w_1200,f_auto,q_auto/v1651191749/blog/travel-xp/torres-del-paine/mirante_los_cuernos_mzg4qb.jpg"
  />
</div>

<div class="flex mb4">
  <div class="flex4">
    <Map {zoom} {center}>
      {#each paths as { path, isActive, name }}
        <Polyline {path} {isActive}>
          <InfoWindow component={BasicInfoWindow} props={{ title: name }} />
        </Polyline>
      {/each}
      {#each waypoints as { name, position, type, bounceMs }}
        {#if waypointsFilter[type]}
          <Marker {...position} title={name} {type} {bounceMs}>
            <InfoWindow component={BasicInfoWindow} props={{ title: name }} />
          </Marker>
        {/if}
      {/each}
    </Map>
  </div>

  <div class={classnames('map-size', { flex1: drawerOpen, hide: !drawerOpen })}>
    <div class="flex">
      <button
        on:click={() => (chosenMenu = 'paths')}
        class={classnames('flex1', { pressed: chosenMenu !== 'paths' })}>Caminhos</button
      >
      <button
        on:click={() => (chosenMenu = 'waypoints')}
        class={classnames('flex1', { pressed: chosenMenu !== 'waypoints' })}
        >Pontos de Interesse</button
      >
    </div>
    <ul class="menu">
      {#if chosenMenu === 'paths'}
        {#each paths as path}
          <li
            on:mouseenter={() => (path.isActive = true)}
            on:mouseleave={() => (path.isActive = false)}
          >
            <PathIcon />
            {#if path.link}
              <a href={path.link} target="_blank">{path.name}</a>
            {:else}
              {path.name}{/if}
          </li>
        {/each}
      {/if}
      {#if chosenMenu === 'waypoints'}
        <div class="filters">
          {#each keys(waypointsFilter) as key}
            <button
              on:click={() => (waypointsFilter[key] = !waypointsFilter[key])}
              class={classnames({ pressed: !waypointsFilter[key] })}
              ><svelte:component this={MARKER_TYPES[key].icon} fill="black" /></button
            >
          {/each}
        </div>
        {#each waypoints as wp}
          {#if waypointsFilter[wp.type]}
            <li on:mouseenter={() => (wp.bounceMs = 600)} on:mouseleave={() => (wp.bounceMs = 0)}>
              <svelte:component this={MARKER_TYPES[wp.type].icon} />
              {wp.name}
            </li>
          {/if}
        {/each}
      {/if}
    </ul>
  </div>
</div>

<h2>Principais gastos</h2>

<ul>
  <li><a href="https://www.skyscanner.com.br/">Passagens (~R$3000,00 / pessoa)</a></li>
  <li>
    <a href="https://aspticket.cl/">Ingressos do Parque (US$49,00 / pessoa / mês)</a> heheeh não vende
    um ingresso menor que o mês 🤷🏻‍♀️ da bastante tempo pra terminar o rolê heheh
  </li>
  <li>
    <a href="https://reservas.verticepatagonia.cl/index.xhtml"
      >Campings Vértice (Dickson, Los Perros, Grey) (US$9,00 / pessoa / dia)</a
    >
  </li>
  <li>
    <a href="https://lastorres.com/"
      >Campings Fantástico Sur (Serón, Francés, Chileno) (US$22,00 / barraca de duas pessoas / dia)</a
    >
  </li>
  <li>Passagens de ônibus de ida e volta do parque (R$ 36,00 / trecho / pessoa)</li>
  <li>Passagens de ônibus de ida e volta do aeroporto (R$ 25,00 / trecho / pessoa)</li>
</ul>
<p>
  A cidade de referência é Puerto Natales. Tem poucos vôos para lá. Mas nós conseguimos ir (Vôo LA1
  da Latam saindo quinta feira de manhã de Santiago) e voltar por lá (Vôo JA 340 da JetSmart saindo
  domingo a noite para Santiago). Além de facilitar a logística foi mais barato. Vale ver se
  conseguimos vôo pra lá também. Mas outra opção que o pessoal costuma fazer é ir pra Punta Arenas e
  pegar um bus.
</p>
<p>
  Arredonda tudo pra cima e coloca uma margem pra gastar com comida e souvenirs, da pra fazer essa
  viagem com uns ~R$4000,00 por pessoa.
</p>

<h2>Itens que eu levei na minha mochila e recomendações em parênteses</h2>
<ul>
  <p class="f3 b">Equipamentos</p>
  <li>bastão caminhada</li>
  <li>bastão gopro</li>
  <li>pilha</li>
  <li>
    barraca (só o camping Paine Grande que pega bastante vento, se pularmos esse camping não precisa
    ser nenhuma barraca muito high tech... eu pulei o Paine Grande no dia 5 e mesmo somando 2
    trechos deu 20km de caminhada, predominantemente plana. É tranquilo, mas o dia anterior é o mais
    duro, então há a chance de ter gente cansada 😅)
  </li>
  <li>headlamp</li>
  <li>gopro</li>
  <li>
    saco de dormir (preferência conforto próximo de 0ºC, mas ai vai do frio de cada um, e da pra
    dormir com mais roupas também)
  </li>
  <li>isolante térmico</li>
  <li>algumas sacolas plásticas pra impermeabilizar qlq coisa</li>
  <li>capa da mochila</li>

  <p class="f3 b">Primeiros socorros básicos</p>
  <li>manta térmica</li>
  <li>atadura</li>
  <li>gaze</li>
  <li>antiséptico</li>
  <li>pomada gelol</li>
  <li>lenço umedecidos</li>
  <li>esparadrapos</li>

  <p class="f3 b">Eletrônicos</p>
  <li>power bank</li>
  <li>relogio</li>
  <li>cabo relogio</li>
  <li>cabo celular</li>
  <li>tomada</li>

  <p class="f3 b">Comidas</p>
  <li>
    Repositor eletrolítico em pó (além de repor, da um gostinho pra não ficar tomando só água toda
    hora hehehe)
  </li>
  <li>
    <span class="strike">fogareiro, isqueiro, panela e talheres</span> (eu não levaria de novo 🤔 claro
    que é gostoso comer algo quentinho no final do dia, mas comer só o shake é MUITO mais leve, na minha
    opinião não compensa o peso, não achei o rolê tão frio assim, na maioria dos dias pegamos temperaturas
    próximas de 10 ~ 15ºC, a temperatura só caia de madrugada. E o banho quente nos campings também substitui
    facilmente o agrado de uma comida quente, mesmo que demos mais azar e peguemos dias piores.)
  </li>
  <li>
    shakeira (Tem MUITA água no parque no meio da trilha, não senti necessidade de ter um
    reservatório para água, só a shakeira seria suficiente, mas quem quiser algo mais prático, uma
    garrafinha de 500ml é mais que suficiente.)
  </li>
  <li><a href="https://www.foodz.store/">Refeição em pó</a></li>

  <p class="f3 b">Uso diário</p>
  <li>protetor solar</li>
  <li>shampoo</li>
  <li>toalha</li>

  <p class="f3 b">Roupas</p>
  <li>bota</li>
  <li>calça impermeável</li>
  <li>casaco impermeável</li>
  <li>2 bandana</li>
  <li>2 meião</li>
  <li>3 meias</li>
  <li>5 cuecas</li>
  <li>camisa manga longa</li>
  <li>regata</li>
  <li>camisa</li>
  <li>2 segunda pele camisa</li>
  <li>segunda pele calça</li>
  <li>2 calça short</li>
  <li>1 short</li>
  <li>viseira</li>
  <li>(recomendo também levar luvas e fleece, não seja teimoso igual eu)</li>

  <p class="f3 b">Documentos</p>
  <li>passaporte e rg</li>
  <li>papeis comprovantes dos campings</li>
</ul>

<h2>
  Documentos necessários pra ingressar no país (espero não precisar mais do teste covid em Outubro)
</h2>
<ul>
  <li><a href="https://c19.cl/#/">papel c19 (vigilancia sanitaria)</a></li>
  <li>
    <a href="https://mevacuno.gob.cl/"
      >papel mevacuno (pase mobilidad) ATENÇÃO pode demorar 1 mês pra ficar pronto</a
    >
  </li>
  <li>
    <a href="https://sag.cerofilas.gob.cl/etapas/ejecutar/31655834"
      >papel sag (documento de viagem)</a
    >
  </li>
  <li>papel teste PCR covid (feitos até 72h antes da viagem)</li>
</ul>

<h2>Considerações sobre a caminhada</h2>
<p>
  No mapa ali em cima da pra passar o mouse em cima dos nomes dos trechos na direita pra ter uma
  noção das distâncias, também da pra clicar no nome pra ir pra atividade do strava pra ter uma
  noção com mais detalhes.
</p>
<p>
  No dia 6 demos uma puxada longa! Acabamos fazendo 32km no dia e foi bem cansativo, mas foi
  divertido, já estávamos no finalzinho do rolê mesmo, não precisávamos ficar guardando tanta
  energia, foi bom extravazar heheeh, mas por exemplo, se pegássemos tempo ruim ia ser bem sofrido
  :/ Como o Camping Chileno e o Francés são do mesmo operador (Fantástico Sur), nosso plano B era
  negociar pra ficar mais uma noite no Francés se o tempo estivesse ruim. Por sorte não precisou.
</p>
<p>
  De qualquer forma é uma possibilidade boa. Tem seu valor reservar duas noites seguidas no mesmo
  camping Francés, daih reservaríamos um dia inteiro pra subir o Mirador Britânico e voltar, são
  15km de caminhada sem mochila, da pra ir bem agradável pra descansar um pouco. Acaba sobrando
  bastante tempo livre, da pra tomar um banhão de lago congelante no Camping Francés heheheh.
</p>
<p>
  O Camping Francés é meio ruim de infraestrutura, então reservar 2 dias lá é um pequeno risco. Por
  exemplo, quando eu fui faltou água lá. Outra opção é reservar uma noite no Francés e outra nos
  Cuernos, que é pertinho. Bom pra variar um pouco o ambiente e dormir em 2 lugares diferentes. O
  Cuernos tem bem mais estrutura e é muito mais bonito, mas não teria o "luxo" de ficar um dia sem
  desmontar / montar barraca.
</p>
<p>
  O dia 4 é o mais duro. Foram 16km que não tem como quebrar, esse é o mínimo mesmo. E eles "te
  obrigam" a sair do camping as 7h da manhã. Pra evitar que alguém termine a trilha a noite. O
  Camping Los Perros é o pior de infra estrutura, o lugar de montar barracas é bem barrão e não tem
  água quente no chuveiro. Uma dica, que nós fizemos inclusive, é alugar uma barraca lá, assim não
  sujou tudo nossa barraca e não precisamos acordar ainda mais cedo pra desmontar e limpar no
  escuro. Nos cobraram R$120,00 pela barraca de dois lugares. Acho que lá me cobraram só a diferença
  porque eu já tinha reservado o lugar no camping com barraca própria no site. Enfim, vale olhar e
  talvez já reservar uma barraca lá pra essa noite no Los Perros, mas isso é opção de cada um.
</p>
<p>
  O resto dos dias foi uma caminhada predominantemente plana e tranquila, bem apreciativa e
  terminamos tranquilamente BEM ANTES do sol se por sem esforço algum. Nada para se preocupar. 🌸
</p>

<style>
  .menu li {
    display: block;
  }
  .map-size {
    overflow: scroll;
  }
  .menu {
    padding-inline-start: 10px;
  }
  .controls {
    text-align: right;
    margin-bottom: 5px;
  }

  .filters {
    margin: 10px 0;
  }

  .pressed {
    opacity: 0.5;
  }
  .flex1 {
    flex: 1;
  }
  .flex4 {
    flex: 4;
  }
</style>
