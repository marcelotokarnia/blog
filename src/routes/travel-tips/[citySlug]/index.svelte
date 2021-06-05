<script context="module">
  export async function preload({ params, query }) {
    const city = {floripa: {name: 'Florianópolis'}}[params.citySlug]
    return { city }
    
  }
</script>

<script>
  export let city
</script>

<div>{city.name}</div>