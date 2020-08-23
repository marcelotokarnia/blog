<script>
  export let name
  export let size = 'small'
</script>

<style>
  span {
    font-size: 0.75rem;
    margin: 0.25rem;
    padding: 0.5rem;
    background-color: #eee;
    border-radius: 9999px;
  }
  .large {
    font-size: 0.875rem;
  }
</style>

<span class={size}>{name}</span>
