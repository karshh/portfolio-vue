<script setup lang="ts">
import L from 'leaflet'
import type { MapInfo } from '../../server/utils/data'
const props=defineProps<{title:string;items:MapInfo[];showStarted?:boolean}>(); const target=ref<HTMLElement|null>(null)
onMounted(()=>{ if(!target.value)return; const map=L.map(target.value,{scrollWheelZoom:false}).setView([51.0447,-114.0719],10); L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors'}).addTo(map); const bounds:[number,number][]=[]; for(const item of props.items){ const point:[number,number]=[item.latitude,item.longitude]; bounds.push(point); L.marker(point).addTo(map).bindPopup(`<strong>${item.location}</strong><br>${item.description}${props.showStarted?`<br>Started: ${new Date(item.created).toLocaleString()}`:''}`) } if(bounds.length)map.fitBounds(bounds,{padding:[30,30],maxZoom:13}); })
</script>
<template><div><h3 class="text-center">{{ title }}</h3><div class="map-shell"><div ref="target" class="leaflet-map" data-testid="leaflet-map" :aria-label="title" /><p v-if="!items.length" class="map-message">No current items reported.</p></div></div></template>
