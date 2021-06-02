<script>
  export let ariacurrent
  export let href
  export let label
</script>

<li>
  <a rel="prefetch" aria-current={ariacurrent} {href}>{label}</a>
</li>

<style>
  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 2em);
    height: 2px;
    background-color: lightskyblue;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em;
    display: block;
  }
</style>
