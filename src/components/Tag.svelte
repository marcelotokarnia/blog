<script>
  export let name
  export let size = 'small'
</script>

<span class={size}>{name}</span>

<style>
  span {
    font-size: 0.75rem;
    margin: 0.25rem;
    padding: 0.5rem;
    background-color: #8899a6;
    color: white;
    border-radius: 9999px;
  }
  .large {
    font-size: 1.5rem;
  }
</style>
