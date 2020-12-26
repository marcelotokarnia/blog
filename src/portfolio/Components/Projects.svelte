<script>
  import { append } from 'ramda'
  import Project from './Project.svelte'
  import projects from '../projects'

  const sizedProjects = projects.map((proj, idx) => ({
    ...proj,
    size: 'big',
  }))
</script>

<div class="flexwrap">
  {#each sizedProjects as project}
    <Project {...project} />
  {/each}
</div>

<style>
  .flexwrap {
    display: flex;
    flex-wrap: wrap;
  }
</style>
