<script>
  import { getContext, onDestroy } from 'svelte'
  import { mapKey, targetKey } from './Map.svelte'
  import { v4 as uuid } from 'uuid'
  import { poly2array } from '../../utils/map'

  export let paths
  export let autoRemove
  const id = uuid()

  const { getMap } = getContext(mapKey)
  const map = getMap()
  const { getTarget } = getContext(targetKey)
  const target = getTarget()

  const polygon = new google.maps.Polygon({
    paths: poly2array(paths),
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  })

  if (target) {
    const eventListener = target.addListener('click', () => {
      if (autoRemove) {
        target.registerRemoveKey(id, polygon)
      }
      polygon.setMap(map)
    })

    onDestroy(() => {
      polygon.setMap(null)
      google.maps.event.removeListener(eventListener)
    })
  } else {
    polygon.setMap(map)

    onDestroy(() => {
      polygon.setMap(null)
    })
  }
</script>
