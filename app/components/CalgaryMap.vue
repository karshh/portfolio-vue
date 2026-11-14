<script setup lang="ts">
import type { Map } from 'leaflet'
import type { MapInfo } from '../../server/utils/data'

const props = defineProps<{
  title: string
  items: MapInfo[]
  showStarted?: boolean
}>()

const target = ref<HTMLElement | null>(null)
let map: Map | undefined

onMounted(async () => {
  if (!target.value) return

  const { default: L } = await import('leaflet')
  map = L.map(target.value, { scrollWheelZoom: false }).setView([51.0447, -114.0719], 10)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  const bounds = L.latLngBounds([])
  for (const item of props.items) {
    const point: [number, number] = [item.latitude, item.longitude]
    const popup = document.createElement('div')
    const location = document.createElement('strong')
    const description = document.createElement('p')
    location.textContent = item.location
    description.textContent = item.description
    popup.append(location, description)

    if (props.showStarted) {
      const started = document.createElement('p')
      started.textContent = `Started: ${new Date(item.created).toLocaleString()}`
      popup.append(started)
    }

    L.circleMarker(point, {
      radius: 7,
      color: '#fff',
      weight: 2,
      fillColor: '#dc3545',
      fillOpacity: 0.9
    })
      .bindPopup(popup)
      .addTo(map)
    bounds.extend(point)
  }

  if (bounds.isValid()) map.fitBounds(bounds.pad(0.2), { maxZoom: 13 })
})

onBeforeUnmount(() => map?.remove())
</script>

<template>
  <div>
    <h3 class="text-center">{{ title }}</h3>
    <div class="map-shell">
      <div
        ref="target"
        class="leaflet-map"
        data-testid="leaflet-map"
        :aria-label="`${title} map`"
      />
      <p v-if="!items.length" class="map-message">No current items reported.</p>
    </div>
  </div>
</template>
