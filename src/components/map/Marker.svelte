<script context="module">
  import {
    ShopIcon,
    shopIconUrl,
    SummitIcon,
    summitIconUrl,
    ViewpointIcon,
    viewpointIconUrl,
    campingIconUrl,
    CampingIcon,
    waterIconUrl,
    WaterIcon,
    infoIconUrl,
    InfoIcon,
  } from './icons'
  export const MARKER_TYPES = {
    SHOP: { name: 'SHOP', image: shopIconUrl, icon: ShopIcon },
    SUMMIT: { name: 'SUMMIT', image: summitIconUrl, icon: SummitIcon },
    VIEWPOINT: { name: 'VIEWPOINT', image: viewpointIconUrl, icon: ViewpointIcon },
    CAMPING: { name: 'CAMPING', image: campingIconUrl, icon: CampingIcon },
    WATER: { name: 'WATER', image: waterIconUrl, icon: WaterIcon },
    INFO: { name: 'INFO', image: infoIconUrl, icon: InfoIcon },
    WATERFALL: { name: 'WATERFALL', image: infoIconUrl, icon: InfoIcon },
    GLACIER: { name: 'GLACIER', image: infoIconUrl, icon: InfoIcon },
    RIVER: { name: 'RIVER', image: infoIconUrl, icon: InfoIcon },
    BEACH: { name: 'BEACH', image: infoIconUrl, icon: InfoIcon },
    CAVE: { name: 'CAVE', image: infoIconUrl, icon: InfoIcon },
  }
</script>

<script>
  import { getContext, setContext, onDestroy } from 'svelte'
  import { mapKey, targetKey, TARGET_TYPES } from './Map.svelte'

  const { getMap } = getContext(mapKey)
  const map = getMap()

  export let lat
  export let lng
  export let title
  export let bounceMs
  export let type = ''

  $: if (bounceMs) {
    marker.setAnimation(google.maps.Animation.BOUNCE)
    setTimeout(() => {
      marker.setAnimation(null)
    }, bounceMs)
  }

  const marker = new google.maps.Marker({
    position: { lat, lng },
    map,
    title,
    icon: type ? MARKER_TYPES[type].image : null,
  })

  marker.toRemoveKeys = {}
  marker.registerRemoveKey = (id, obj) => (marker.toRemoveKeys[id] = obj)
  marker.deregisterRemoveKey = id => {
    delete marker.toRemoveKeys[id]
  }

  setContext(targetKey, {
    getTarget: () => marker,
    getTargetType: () => TARGET_TYPES.MARKER,
  })

  onDestroy(() => marker.setMap(null))
</script>

<slot />
