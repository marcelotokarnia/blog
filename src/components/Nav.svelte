<script lang="typescript">
  import NavItem from './NavItem.svelte'
  import SiteMap from './SiteMap.svelte'
  export let segment
</script>

<nav class="top-menu">
  <ul>
    <NavItem ariacurrent={segment === undefined ? 'page' : undefined} href="." label="🏡 Home" />
    <NavItem
      ariacurrent={segment === 'resume' ? 'page' : undefined}
      href="resume"
      label="📚 Resume"
    />
    <NavItem
      ariacurrent={segment === 'portfolio' ? 'page' : undefined}
      href="portfolio"
      label="⚙️ Portfolio"
    />
    <NavItem
      ariacurrent={segment === 'coding-blog' ? 'page' : undefined}
      href="coding-blog"
      label="👾 Coding Blog"
    />
    <NavItem ariacurrent={segment === 'ts' ? 'page' : undefined} href="ts" label="TS Tips" />

    <!-- Sapper build exclude routes that are not referenced 🤷🏻‍♀️ -->
    <SiteMap />

    <!-- <li class="hide">
      <NavItem
        ariacurrent={segment === 'travel-xp' ? 'page' : undefined}
        href="travel-xp"
        label="🗺 Travel XP"
      />
    </li> -->
  </ul>
</nav>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  :global(.hide) {
    display: none;
  }
</style>
